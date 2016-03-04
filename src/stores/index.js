import {articles, comments} from '../fixtures'
import ArticleStore from './ArticleStore'
import CommentStore from './CommentStore'

let stores = {}
Object.assign(stores, {
    articles: new ArticleStore(stores, articles),
    comments: new CommentStore(stores, comments)
})

window.stores = stores

export const articlesStore = stores.articles
export const commentStore = stores.comments
