import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { rootReducer } from './reducers';
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage
} from './helpers/localStorage';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

// Initial Redux state
const persistedState = loadStateFromLocalStorage();

const enhancer = composeEnhancers(
  applyMiddleware(...[thunk, loggerMiddleware])
);

export const store = createStore(rootReducer, persistedState, enhancer);

// Hydrate localstorage with Redux store
store.subscribe(() => {
  saveStateToLocalStorage({
    list: store.getState().list
  });
});
