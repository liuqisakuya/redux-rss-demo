import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';
import ThunkMiddleware from 'redux-thunk';
import createFetchMiddleware from 'redux-composable-fetch';
import rootReducer from './reducers';
// import DevTools from './DevTools';

//console.log('rootReducer', rootReducer);
const FetchMiddleware = createFetchMiddleware({
  afterFetch({ action, result }) {
    //console.log('action', action, result);
    return result.json().then(data => {
      return Promise.resolve({
        action,
        result: data,
      });
    });
  },
});
const finalCreateStore = compose(
  applyMiddleware(ThunkMiddleware, FetchMiddleware, routerMiddleware(hashHistory)),
  // DevTools.instrument()
)(createStore);

const reducer = combineReducers(Object.assign({}, rootReducer, {
  routing: routerReducer,
}));

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState);
  return store
}
