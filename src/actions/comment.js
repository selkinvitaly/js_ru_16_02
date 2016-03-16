import AppDispatcher from '../dispatcher'
import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, LOAD_COMMENTS_BY_PAGE } from './constants'
import { loadForArticle, loadByPage } from './api/comment'
import { asyncAC } from './api/utils'

export function addComment(text, articleId) {
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        data: {
            text,
            id: Date.now(),
            articleId
        }
    })
}

export const loadCommentsForArticle = asyncAC(LOAD_COMMENTS_FOR_ARTICLE, loadForArticle)
export const loadCommentsByPage = asyncAC(LOAD_COMMENTS_BY_PAGE, loadByPage);
