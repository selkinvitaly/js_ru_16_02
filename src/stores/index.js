//import {articles, comments} from '../fixtures'
import ArticleStore from './ArticleStore'
import CommentStore from './CommentStore'

let stores = {}
Object.assign(stores, {
    articles: new ArticleStore(stores),
    comments: new CommentStore(stores)
})

window.stores = stores

export const articlesStore = stores.articles
export const commentStore = stores.comments
