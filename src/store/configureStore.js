import { compose, createStore, applyMiddleware } from 'redux';
import storage from 'redux-storage';
import createEngine from 'redux-storage/engines/localStorage';
import { devTools } from 'redux-devtools';
import rootReducer from 'reducers';

const reducer = storage.reducer(rootReducer);
const engine = storage.decorators.immutablejs(createEngine('my-save-key'), [
  ['immutablejs-reducer'], [
    'plain-object-reducer', 'with-immutablejs-key'
  ]
]);
const middleware = storage.createMiddleware(engine);

let createStoreWithMiddleware;

if (__DEBUG__) {
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
  load(store)
      .then((newState) => console.log('Loaded state:', newState))
      .catch(() => console.log('Failed to load previous state'));

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
