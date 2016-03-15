import React from 'react'
import { Router, Route, browserHistory, hashHistory } from 'react-router'
import Container from './components/Container'
import ArticlePage from './components/ArticlePage'

export default (
    <Router history = {browserHistory} >
        <Route path="/articles" component = {Container}>
            <Route path=":id" component = { ArticlePage } />
        </Route>
    </Router>
)