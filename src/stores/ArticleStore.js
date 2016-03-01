class ArticleStore {
    constructor(initialState) {
        this.__items = initialState
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