export default store => next => action => {
    console.log('--- before', store.getState());
    console.log('---', action);
    next(action)
    console.log('---', 'after', store.getState());
}

function middleware (store) {
    return function (next) {
        return function (action) {
            console.log('--- before', store.getState());
            console.log('---', action);
            next(action)
            console.log('---', 'after', store.getState());
        }
    }
}