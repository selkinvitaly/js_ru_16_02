import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import { deleteArticle } from './../actions/articles'
require('./../style.css')

class Article extends Component {
    static propTypes = {
        article: PropTypes.object,

        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

/*
    shouldComponentUpdate(nextProps, nextState) {
        console.log('---', arguments);
        return this.props.article != nextProps.article
    }
*/

    render() {
        return (
            <div>
                {this.getTitle()}
                {this.getBody()}
            </div>
        )
    }

    getTitle() {
        const { onClick, selected, article: { title } } = this.props
        const selectedStyle = selected ? {color: 'red'} : null;
        return  (
            <h3 style = {selectedStyle} onClick={onClick}>
                {title}
            </h3>
        )
    }

    getBody() {
        const {article} = this.props
        if (article.loading) return <div key="article!"><h2>Loading...</h2></div>
        return (
            <div key="article">
                <a href="#" onClick = {this.handleDeleteArticle}>delete this article</a>
                <p>{article.text}</p>
                <CommentList article = {article}/>
            </div>
        )
    }

    handleDeleteArticle = (ev) => {
        ev.preventDefault()
        deleteArticle(this.props.article.id)
    };
}

export default Article