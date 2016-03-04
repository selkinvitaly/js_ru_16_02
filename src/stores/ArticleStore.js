import SimpleStore from './SimpleStore'
import { DELETE_ARTICLE, ADD_COMMENT } from '../actions/constants'
import AppDispatcher from '../dispatcher'

class ArticleStore extends SimpleStore {
    constructor(...args) {
        super(...args)
        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data } = action

            switch (type) {
                case DELETE_ARTICLE:
                    this.delete(data.id)
                    break;

                case ADD_COMMENT:
                    AppDispatcher.waitFor([this.__stores.comments.dispatchToken])
                    const article = this.getById(data.articleId)
                    article.comments = (article.comments || []).concat(data.id)
                    break

                default: return
            }

            this.emitChange()
        })
    }
}

export default ArticleStore