//import {articles, comments} from '../fixtures'
import ArticleStore from './ArticleStore'
import CommentStore from './CommentStore'
import UserStore from './userStore'
import LangStore from './LangStore'

let stores = {}
Object.assign(stores, {
    articles: new ArticleStore(stores),
    comments: new CommentStore(stores),
    users: new UserStore(stores),
    langs: new LangStore()
})

window.stores = stores

export const articlesStore = stores.articles
export const commentStore = stores.comments
export const usersStore = stores.users
export const langsStore = stores.langs
