import React from 'react'
import { Router, Route, Redirect, IndexRedirect, IndexRoute, browserHistory, hashHistory } from 'react-router'
import Container from './components/Container'
import ArticlePage from './components/ArticlePage'
import NewArticlePage from './components/NewArticle'
import NotFound from './components/NotFound'
import ArticleIndexPage from './components/ArticleIndexPage'

export default (
    <Router history = {browserHistory} >
        <Route path="/articles" component = {Container}>
            {/*<IndexRedirect to="/articles/1" />*/}
            <IndexRoute component = {ArticleIndexPage}/>
            <Route path="/new" component = { NewArticlePage} />
            <Route path="/articles/:id" component = { ArticlePage } />
        </Route>
        <Redirect from = "/:id" to="/articles/:id" />
        <Route path = "*" component = {NotFound} />
    </Router>
)