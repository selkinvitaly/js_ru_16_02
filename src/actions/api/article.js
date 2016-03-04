import $ from 'jquery'

export function loadAll() {
    return $.get('/api/article')
}