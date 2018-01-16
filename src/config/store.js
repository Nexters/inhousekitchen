import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducers } from "../ducks/index";
import rootSaga from "../sagas";

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const applyMiddlewares = composeWithDevTools(
    applyMiddleware(sagaMiddleware, createLogger())
  );
  const store = createStore(reducers, initialState, applyMiddlewares);
  sagaMiddleware.run(rootSaga);
  return store;
}
