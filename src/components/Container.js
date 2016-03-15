import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { articlesStore } from '../stores'
import ArticleList from './ArticleList'
import { loadAllArticles } from './../actions/articles'

class Container extends Component {
    state = {
        articles: articlesStore.getOrLoadAll(),
        loading: articlesStore.loading
    }

    componentDidMount() {
        articlesStore.addChangeListener(this.change)
    }

    componentWillUnmount() {
        articlesStore.removeChangeListener(this.change)
    }

    render() {
        const { loading } = this.state
        if (loading) return <h3>Loading...</h3>
        return (
            <div>
                {this.getMenu()}
                {this.props.children}
            </div>
        )
    }

    getMenu() {
        const links = this.state.articles.map((article) =>
            <li key={article.id}>
                <Link to={`/articles/${article.id}`}
                    activeClassName = "active"
                    activeStyle = {{color: 'red'}}
                >
                    {article.title}
                </Link>
            </li>)
        return <ul>{links}</ul>
    }

    change = () => {
        this.setState({
            loading: articlesStore.loading,
            articles: articlesStore.getAll()
        })
    };
}


export default Container