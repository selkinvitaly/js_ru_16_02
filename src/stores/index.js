//import {articles, comments} from '../fixtures'
import ArticleStore from './ArticleStore'
import CommentStore from './CommentStore'

import MyCommentsStore from "./MyCommentsStore";

let stores = {}
Object.assign(stores, {
    articles: new ArticleStore(stores),
    comments: new CommentStore(stores),
    myCommentsStore: new MyCommentsStore(stores)
})

window.stores = stores

export const articlesStore = stores.articles
export const commentStore = stores.comments
export const myCommentsStore = stores.myCommentsStore;
