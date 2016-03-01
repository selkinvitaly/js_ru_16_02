import {articles, comments} from '../fixtures'
import ArticleStore from './ArticleStore'
import SimpleStore from './SimpleStore'

export const articlesStore = new ArticleStore(articles)
export const commentStore = new SimpleStore(comments)
