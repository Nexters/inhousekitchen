import { createStore, applyMiddleware, compose, composeEnhancers } from 'redux';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import { createOfflineMiddleware } from '@redux-offline/redux-offline/lib/middleware';
import { RESET_STATE } from '@redux-offline/redux-offline/lib/constants';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { reducers } from '../ducks/index';
import rootSaga from '../sagas';

const customConfig = {
  ...offlineConfig,
  effect: (effect, _action) => (effect.url ? effect.url() : Promise.reject())
};

const initialState = {};
const createOfflineStore = offline(customConfig)(createStore);

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  createReactNavigationReduxMiddleware('root', state => state.nav),
  sagaMiddleware,
  createOfflineMiddleware(customConfig),
]; // createLogger(),
export const addNavigationListener = createReduxBoundAddListener('root');

const applyMiddlewares = composeWithDevTools(applyMiddleware(...middleware));
const store = createOfflineStore(reducers, initialState, applyMiddlewares);
sagaMiddleware.run(rootSaga);
export default store;
