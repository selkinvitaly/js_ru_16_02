import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { increment } from '../actions/counter'
import { deleteArticle } from '../actions/articles'
import { addComment } from '../actions/comments'
import ArticleList from '../components/ArticleList'

class AppContainer extends Component {
    static propTypes = {
        counter: PropTypes.number,
        increment: PropTypes.func
    };

    render() {
        const { counter, articles, increment, deleteArticle, addComment } = this.props
        return (
            <div>
                <h1 onClick={() => increment(10)}>{counter}</h1>
                 {/* <ul>{this.getArticles()}</ul> */}
                <div>
                  <ArticleList
                    articles={articles}
                    deleteArticle={deleteArticle}
                    addComment={addComment}
                  />
                </div>
            </div>
        )
    }

    getArticles() {
        return this.props.articles.map(article => <li key={article.id}>{article.title}</li>)
    }
}

export default connect((state) => {
    const {counter, articles} = state
    return {counter, articles}
}, {
    increment,
    deleteArticle,
    addComment
})(AppContainer)
