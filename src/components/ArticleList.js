import React, { Component, PropTypes } from 'react'
import Article from './Article'
import CommentList from './CommentList'
import Select from 'react-select'
require('react-select/dist/react-select.css')

class ArticleList extends Component {
    constructor() {
        super()
        this.state = {
            open: null,
            selected: []
        }
    }
    render() {
        return (
            <div>
                {this.getFilter()}
                <ul>
                    {this.getArticles()}
                </ul>
            </div>
        )
    }

    getArticles() {
        const { selected } = this.state
        return this.props.articles
            .filter(({ id }) => selected.includes(id.toString()))
            .map((article) =>
                <li key={article.id}>
                    <Article article={article}
                             isOpen = {article.id === this.state.open}
                             onClick = {this.open.bind(this, article.id)}
                    />
                </li>
            )
    }

    getFilter() {
        const options = this.props.articles.map(({ title, id }) => {
            return {
                label: title,
                value: id
            }
        })
        return <Select
            value = {this.state.selected}
            options = {options}
            multi = {true}
            onChange = {this.changeFilter}
        />
    }

    changeFilter = (selected) => {
        this.setState({
            selected: selected.split(',')
        })
    }

    open(open) {
        this.setState({ open })
    }
}

export default ArticleList