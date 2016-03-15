import React from 'react'
import { Router, Route, browserHistory, hashHistory } from 'react-router'
import Container from './components/Container'
import ArticlePage from './components/ArticlePage'
import NewArticlePage from './components/NewArticle'
import NotFound from './components/NotFound'

export default (
    <Router history = {browserHistory} >
        <Route path="/articles" component = {Container}>
            <Route path="/new" component = { NewArticlePage} />
            <Route path="/articles/:id" component = { ArticlePage } />
        </Route>
        <Route path = "*" component = {NotFound} />
    </Router>
)