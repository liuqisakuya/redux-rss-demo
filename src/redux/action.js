
export const LOAD_ARTICLES = 'LOAD_ARTICLES';
export const LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLES_SUCCESS';
export const LOAD_ARTICLES_ERROR = 'LOAD_ARTICLES_ERROR';
export const LOAD_ONE_ARTICLE = 'LOAD_ONE_ARTICLE';
export const LOAD_ONE_ARTICLES_SUCCESS = 'LOAD_ONE_ARTICLES_SUCCESS';
export const LOAD_ONE_ARTICLES_ERROR = 'LOAD_ONE_ARTICLES_ERROR';
export const LOAD_MORE = 'LOAD_MORE';
export const LOAD_MORE_ARTICLE = 'LOAD_MORE_ARTICLE';
export const LOAD_MORE_ARTICLES_SUCCESS = 'LOAD_MORE_ARTICLES_SUCCESS';
export const LOAD_MORE_ARTICLES_ERROR = 'LOAD_MORE_ARTICLES_ERROR';
let page = 1;
export let URL = `https://cnodejs.org/api/v1/topics?mdrender='true'&&tab=share&&page=1&&limit=10`

export function more(morestate = {
  loading: true,
  error: false,
  articleList: [],
  page: 1,
}, page) {
  return {
    types: [LOAD_MORE_ARTICLE, LOAD_MORE_ARTICLES_SUCCESS, LOAD_MORE_ARTICLES_ERROR],
    url: `https://cnodejs.org/api/v1/topics?mdrender='true'&&tab=share&&page=${page}&&limit=10`,
    //  URL.replace(/(.*page=)([0-9]+)(.*)/, "$1"+(+URL.match(/.*page=([0-9]+)/)[1]+1)+"$3"),
    morestate,
  }
}

export function loadOneArticle(id) {
  return {
    types: [LOAD_ONE_ARTICLE, LOAD_ONE_ARTICLES_SUCCESS, LOAD_ONE_ARTICLES_ERROR],
    url: `https://cnodejs.org/api/v1/topic/${id}`,
  }
}

export function loadArticles() {
  return {
    types: [LOAD_ARTICLES, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLES_ERROR],
    url: URL,
  }
}

export const listActions = {
  loadArticles,
  more,
  loadOneArticle
};
