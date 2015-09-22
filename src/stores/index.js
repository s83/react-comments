// import { compose, createStore } from 'redux';
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import storage from 'redux-storage';
import createEngine from 'redux-storage/engines/localStorage';
import { devTools } from 'redux-devtools';
import rootReducer from 'reducers';

const reducer = storage.reducer(combineReducers(rootReducer));
const engine = createEngine('my-save-key');
const middleware = storage.createMiddleware(engine);

let createStoreWithMiddleware;

if (__DEBUG__) {
  createStoreWithMiddleware = applyMiddleware(middleware)(compose(devTools())(createStore));
} else {
  createStoreWithMiddleware = applyMiddleware(middleware)(createStore);
}

export default function configureStore (initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
