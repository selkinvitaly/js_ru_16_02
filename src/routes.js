import React from 'react'
import { Router, Route, browserHistory, hashHistory } from 'react-router'
import Container from './components/Container'

export default (
    <Router history = {browserHistory} >
        <Route path="/" component = {Container}/>
    </Router>
)