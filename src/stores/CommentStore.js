import SimpleStore from './SimpleStore'
import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, LOAD_COMMENTS_FOR_PAGE, _SUCCESS, _FAIL, _START } from '../actions/constants'
import AppDispatcher from '../dispatcher'
import { loadCommentForPage } from '../actions/comment'

class CommentStore extends SimpleStore {
    constructor(...args) {
        super(...args)
        this.loading = []
        this.loaded = []
        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data, response } = action

            switch (type) {
                case ADD_COMMENT:
                    this.add({
                        id: data.id,
                        text: data.text
                    })
                    break;

                case LOAD_COMMENTS_FOR_ARTICLE + _SUCCESS:
                    response.forEach(this.add)
                    break

                case LOAD_COMMENTS_FOR_PAGE + _START:
                    this.loading.push(data.page)
                    break;

                case LOAD_COMMENTS_FOR_PAGE + _SUCCESS:
                    this.loading = this.loading.filter(page => page!= data.page)
                    this.__total = response.total
                    this.loaded[data.page] = response.records.map(record => record.id)
                    response.records.forEach(this.add)
                    break;

                default: return
            }

            this.emitChange()
        })
    }

    getOrLoadForPage(page) {
        if (this.loaded[page]) return this.loaded[page].map(this.getById)
        if (!this.loading.includes(page)) loadCommentForPage({page})
        return []
    }

    getTotal() {
        return this.__total
    }
}

export default CommentStore