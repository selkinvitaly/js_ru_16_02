import $ from 'jquery'

export function loadForArticle({ articleId }) {
    return $.get(`/api/comment?article=${articleId}`)
}

export function loadByPage({ page, limit }) {
  const offset = (page - 1) * limit;

  return $.get(`/api/comment?limit=${limit}&offset=${offset}`);
}
