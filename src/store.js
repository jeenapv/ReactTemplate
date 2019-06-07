import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import createGlobalReducer from './global-reducer';
import globalSagas from './global-sagas';

export const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  // Middleware for intercepting and dispatching navigation actions
  thunk,
  routerMiddleware(history),
  sagaMiddleware,
];

const store = createStore(
  createGlobalReducer(),
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f,
  ),
);

sagaMiddleware.run(globalSagas);

export default store;
