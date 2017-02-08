import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';
import createFetchMiddleware from 'redux-composable-fetch';
import rootReducer from './reducers';
// import DevTools from './DevTools';

const FetchMiddleware = createFetchMiddleware({
  afterFetch({ action, result }) {
    return result.json().then(data => {
      return Promise.resolve({
          action,
          result: data,
      });
    });
  },
});

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const finalCreateStore = compose(
  applyMiddleware(logger,FetchMiddleware, routerMiddleware(hashHistory)),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const reducer = combineReducers(Object.assign({}, rootReducer, {
  routing: routerReducer,
}));

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState);
  return store
}
