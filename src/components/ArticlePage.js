import React, { Component, PropTypes } from 'react'
import { articlesStore } from '../stores'
import { loadArticleById } from '../actions/articles'
import Article from '../components/Article'

class ArticlePage extends Component {
    constructor(props) {
        super()
        const { params: { id }} = props
        this.state = {
            article: articlesStore.getOrLoadById(id)
        }
    }
    componentDidMount() {
        articlesStore.addChangeListener(this.change)
    }

    componentWillUnmount() {
        articlesStore.removeChangeListener(this.change)
    }

    componentWillReceiveProps(props) {
        this.setState({
            article: articlesStore.getOrLoadById(props.params.id)
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
            article: articlesStore.getOrLoadById(this.props.params.id)
        })
    }
}

export default ArticlePage