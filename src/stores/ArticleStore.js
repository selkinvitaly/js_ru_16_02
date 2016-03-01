import { EventEmitter } from 'events'
const CHANGE_EVENT = 'CHANGE_EVENT'
import AppDispatcher from '../dispatcher'

class ArticleStore extends EventEmitter {
    constructor(initialState) {
        super()
        this.__items = initialState
        AppDispatcher.register((action) => {

        })
    }

    emitChange() {
        this.emit(CHANGE_EVENT)
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback)
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback)
    }

    getAll() {
        return this.__items.slice()
    }

    getById(id) {
        return this.__items.filter((item) => item.id == id)[0]
    }

    add(item) {
        this.__items.push(item)
    }

    delete(id) {
        this.__items = this.__items.filter(item => item.id != id)
    }


}

export default ArticleStore