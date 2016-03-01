import React, { Component, PropTypes } from 'react'
import { articlesStore } from './stores'
import ArticleList from './ArticleList'

class Container extends Component {
    state = {
        articles: articlesStore.getAll()
    }

    componentDidMount() {
        articlesStore.addChangeListener(this.change)
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
        this.setState({
            articles: articlesStore.getAll()
        })
    };
}

export default Container