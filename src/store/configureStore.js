import { compose, createStore, applyMiddleware } from 'redux';
import storage from 'redux-storage';
import createEngine from 'redux-storage/engines/localStorage';
import { devTools } from 'redux-devtools';
import rootReducer from '../reducers';
import { BLUR, FOCUS } from 'redux-form';

const reducer = storage.reducer(rootReducer);
const eventBlacklist = [ BLUR, FOCUS ];

let engine = createEngine('redux-storage');

// filter decorator
engine = storage.decorators.filter(engine, [
    ['comments']
]);

const middleware = storage.createMiddleware(engine, eventBlacklist);

let createStoreWithMiddleware;

if (typeof __DEBUG__ !== 'undefined' && __DEBUG__) {
  createStoreWithMiddleware = compose(
    applyMiddleware(middleware),
    devTools()
  )(createStore);
} else {
  createStoreWithMiddleware = applyMiddleware(middleware)(createStore);
}


export default function configureStore (initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);
  const load = storage.createLoader(engine);

  // load data from localStorage
  load(store);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
