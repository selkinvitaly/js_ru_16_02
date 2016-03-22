import { createStore, compose, applyMiddleware } from 'redux'
import reducer from '../reducers'
import logger from '../middlewares/logger'

const enhancer = applyMiddleware(logger)

const store = createStore(reducer, {}, enhancer)

window.store = store

export default store