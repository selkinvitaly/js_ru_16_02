import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
// import { deleteArticle } from './../actions/articles'
// import translate from '../HOC/Translate'
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
        const { article, translate, addComment } = this.props
        const style = !this.props.isOpen ? {display: "none"} : null
        // if (article.loading) return <div key="article!"><h2>{translate('loading')}...</h2></div>
        return (
            <div style={style}>
                {/*<a href="#" onClick = {this.handleDeleteArticle}>translate('delete this article')</a>*/}
                <a href="#" onClick = {this.handleDeleteArticle}>delete this article</a>
                <p>{article.body}</p>
                <CommentList article = {article} addComment = {addComment} />
            </div>
        )
    }

    handleDeleteArticle = (ev) => {
        ev.preventDefault()

        this.props.deleteArticle(this.props.article.id)
    };
}

// export default translate(Article)
export default Article
