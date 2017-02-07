
export const LOAD_ARTICLES = 'LOAD_ARTICLES';
export const LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLES_SUCCESS';
export const LOAD_ARTICLES_ERROR = 'LOAD_ARTICLES_ERROR';
export const LOAD_MORE = 'LOAD_MORE';
export let URL = `https://cnodejs.org/api/v1/topics?mdrender='true'&&tab=share&&page=1&&limit=20`

export function more() {
  return {
    types: [LOAD_MORE],
    url: URL.replace(/(.*page=)([0-9]+)(.*)/, "$1"+(+URL.match(/.*page=([0-9]+)/)[1]+1)+"$3"),
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
};
