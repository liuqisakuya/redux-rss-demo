
import { combineReducers } from 'redux';
import {LOAD_ARTICLES, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLES_ERROR, LOAD_MORE, URL, more, loadArticles} from './action'

const initialState = {
  loading: true,
  error: false,
  articleList: [],
  page: 1,
};



function moreList(state, action) {

  switch (action.type) {
    case LOAD_MORE: {
      //console.log('statettetetete', state, action);
      return {
        data: state.concat(action.payload),
        success: true,
      }
    }

    default:
      return {
        data: state,
        success: true,
      };
  }
}

function list(state = initialState, action) {

  switch (action.type) {
    case LOAD_ARTICLES: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case LOAD_ARTICLES_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        articleList: action.payload,
      };
    }

    case LOAD_ARTICLES_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }

    case LOAD_MORE: {
      return {
        ...state,
        loading: false,
        error: false,
        articleList: moreList(state.articleList, action),
      };
    }

    default:
      return state;
  }
}



export default {
  home: combineReducers({
    list,
  }),
};
