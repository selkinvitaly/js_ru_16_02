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
        const { selected } = this.state
        const articles = this.props.articles
            .filter(({ id }) => selected.includes(id))
            .map((article) =>
                <li key={article.id}>
                    <Article article={article}
                             isOpen = {article.id === this.state.open}
                             onClick = {this.open.bind(this, article.id)}
                             />
                </li>
            )
        return (
            <div>
                {this.getFilter()}
                <ul>
                    {articles}
                </ul>
            </div>
        )
    }

    getFilter() {
        const options = this.props.articles.map(({ title, id }) => {
            return {
                label: title,
                value: id.toString()
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
        this.setState({ selected })
    }

    open(open) {
        this.setState({ open })
    }
}

export default ArticleList