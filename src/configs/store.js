import { createStore, applyMiddleware, compose, composeEnhancers } from 'redux';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import { createOfflineMiddleware } from '@redux-offline/redux-offline/lib/middleware';
import { RESET_STATE } from '@redux-offline/redux-offline/lib/constants';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from '../ducks/index';
import rootSaga from '../sagas';

const customConfig = {
  ...offlineConfig,
  effect: (effect, _action) => (effect.url ? effect.url() : Promise.reject())
};

export default function configureStore(initialState = {}) {
  const createOfflineStore = offline(customConfig)(createStore);

  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware, createOfflineMiddleware(customConfig)]; // createLogger(),

  const applyMiddlewares = composeWithDevTools(applyMiddleware(...middleware));
  const store = createOfflineStore(reducers, initialState, applyMiddlewares);
  sagaMiddleware.run(rootSaga);
  return store;
}
