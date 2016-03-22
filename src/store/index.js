import { createStore, compose, applyMiddleware } from 'redux'
import reducer from '../reducers'
import logger from '../middlewares/logger'
import DevTools from '../containers/DevTools'

const enhancer = compose(
    applyMiddleware(logger),
    DevTools.instrument()
)

const store = createStore(reducer, {}, enhancer)

window.store = store

if (module.hot) {
    module.hot.accept('../reducers', () =>
        store.replaceReducer(require('../reducers').default)
    );
}

export default store