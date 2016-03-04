import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, LOAD_ALL_ARICLES } from './constants'
import { loadAll } from './api/article'
import { asyncAC } from './api/utils'

export function deleteArticle(id) {
    AppDispatcher.dispatch({
        type: DELETE_ARTICLE,
        data: { id }
    })
}

export const loadAllArticles = asyncAC(LOAD_ALL_ARICLES, loadAll)