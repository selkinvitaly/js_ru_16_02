import SimpleStore from './SimpleStore'
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES_START, LOAD_ALL_ARICLES_FAIL, LOAD_ALL_ARTICLES_SUCCESS } from '../actions/constants'
import AppDispatcher from '../dispatcher'

class ArticleStore extends SimpleStore {
    constructor(...args) {
        super(...args)
        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data, response, error } = action

            switch (type) {
                case DELETE_ARTICLE:
                    this.delete(data.id)
                    break;

                case ADD_COMMENT:
                    AppDispatcher.waitFor([this.__stores.comments.dispatchToken])
                    const article = this.getById(data.articleId)
                    article.comments = (article.comments || []).concat(data.id)
                    break

                case LOAD_ALL_ARTICLES_START:
                    this.loading = true
                    this.loaded = false
                    break;

                case LOAD_ALL_ARICLES_FAIL:
                    this.loaded = false
                    this.loading = false
                    this.error = error
                    break

                case LOAD_ALL_ARTICLES_SUCCESS:
                    this.loaded = true
                    this.loading = false
                    response.forEach(this.add)
                    break;

                default: return
            }

            this.emitChange()
        })
    }
}

export default ArticleStore