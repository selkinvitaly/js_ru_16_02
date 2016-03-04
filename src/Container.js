import React, { Component, PropTypes } from 'react'
import { articlesStore } from './stores'
import ArticleList from './ArticleList'
import { loadAllArticles } from './actions/articles'

class Container extends Component {
    state = {
        articles: articlesStore.getAll()
    }

    componentDidMount() {
        articlesStore.addChangeListener(this.change)
        loadAllArticles()
    }

    componentWillUnmount() {
        articlesStore.removeChangeListener(this.change)
    }

    render() {
        return (
            <div>
                <ArticleList articles = {this.state.articles} />
            </div>
        )
    }

    change = () => {
        console.log('---', 123, articlesStore.getAll());
        this.setState({
            articles: articlesStore.getAll()
        })
    };
}

export default Container