
import { combineReducers } from 'redux';
import { LOAD_ARTICLES, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLES_ERROR, LOAD_MORE_ARTICLE, LOAD_MORE_ARTICLES_SUCCESS, LOAD_MORE, LOAD_MORE_ARTICLES_ERROR, LOAD_ONE_ARTICLE, LOAD_ONE_ARTICLES_SUCCESS, LOAD_ONE_ARTICLES_ERROR, URL, more, loadArticles, loadOneArticle } from './action'

const initialState = {
  loading: true,
  error: false,
  articleList: {
    data: [],
    success: false,
  },
  page: 1,
};

const oneInitialState = {
  data: {},
  success: false,
}

function moreList(state = initialState, action) {
  switch (action.type) {
    case LOAD_MORE_ARTICLE: {
      return state
    }

    case LOAD_MORE_ARTICLES_SUCCESS: {
      return {
        ...state,
        page: state.page + 1,
        loading: false,
        error: false,
        articleList: {
          ...action.payload,
          data: action.morestate.concat(action.payload.data)
        },
      };
    }

    case LOAD_MORE_ARTICLES_ERROR: {

      return state
    }

    default:
      return state;
  }
}

function oneArticle(state = oneInitialState, action) {

  switch (action.type) {
    case LOAD_ONE_ARTICLE: {
      return {
        ...state,
        loading: true,
      };
    }

    case LOAD_ONE_ARTICLES_SUCCESS: {
      console.log('knknskdhs');
      return action.payload;
    }

    case LOAD_ONE_ARTICLES_ERROR: {
      return {
        ...state,
      };
    }

    default:
      return state;
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
      console.log('LOAD_ARTICLES_SUCCESS',action.payload, {
        ...state
      });
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

    default:
      return state;
  }
}



export default {
  home: combineReducers({
    list,
    moreList,
  }),
  detail: combineReducers({
    oneArticle
  })
};
