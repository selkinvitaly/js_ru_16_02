import React, { Component, PropTypes } from 'react'
import { articlesStore } from './stores'
import ArticleList from './ArticleList'

class Container extends Component {
    state = {
        articles: articlesStore.getAll()
    }
    render() {
        return (
            <div>
                <ArticleList articles = {this.state.articles} />
            </div>
        )
    }
}

export default Container