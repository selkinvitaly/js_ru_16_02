import SimpleStore from './SimpleStore'
import { LOGIN } from '../actions/constants'
import AppDispatcher from '../dispatcher'
import { loadAllArticles, loadArticleById } from '../actions/articles'

class UserStore extends SimpleStore {
    constructor(...args) {
        super(...args)
        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data, response, error } = action

            switch (type) {
                case LOGIN:
                    this.currentUser = data.username
                    break;

                default: return
            }

            this.emitChange()
        })
    }

    getOrLoadAll() {
        if (!this.loading && !this.loaded) loadAllArticles()
        return this.getAll()
    }

    getOrLoadById(id) {
        const item = this.getById(id)
        if (!item.loading && !item.loaded) setTimeout(() => loadArticleById({ id }), 0)
        return item
    }
}

export default UserStore/**
 * Created by roman on 3/18/16.
 */
