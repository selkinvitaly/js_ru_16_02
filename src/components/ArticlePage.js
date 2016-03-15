import React, { Component, PropTypes } from 'react'
import { articlesStore } from '../stores'
import { loadArticleById } from '../actions/articles'
import Article from '../components/Article'

class ArticlePage extends Component {
    constructor(props) {
        super()
        const { params: { id }} = props
        this.state = {
            article: articlesStore.getById(id)
        }
    }
    componentDidMount() {
        const { params: {id}} = this.props
        setTimeout(() => loadArticleById({id}), 0)
        articlesStore.addChangeListener(this.change)
    }

    componentWillUnmount() {
        articlesStore.removeChangeListener(this.change)
    }

    componentWillReceiveProps(props) {
        this.setState({
            article: articlesStore.getById(props.params.id)
        })
    }

    render() {
        return (
            <div>
                <Article article = {this.state.article}/>
            </div>
        )
    }

    change = () => {
        this.setState({
            article: articlesStore.getById(this.props.params.id)
        })
    }
}

export default ArticlePage