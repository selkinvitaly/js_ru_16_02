import $ from 'jquery'

export function loadForArticle({ articleId }) {
    return $.get(`/api/comment?article=${articleId}`)
}

export function loadForPage({ page }) {
    return $.get(`/api/comment?limit=10&offset=${(page - 1) * 10}`)
}