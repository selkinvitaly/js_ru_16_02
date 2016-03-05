import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import CSSTransition from 'react-addons-css-transition-group'
import withHint from './../HOC/withHint'
import { deleteArticle, loadArticleById } from './../actions/articles'
require('./../style.css')

class Article extends Component {
    static propTypes = {
        article: PropTypes.object,

        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    componentWillReceiveProps(newProps) {
        const { id } = newProps.article
        if (newProps.isOpen && !this.props.isOpen && !newProps.article.text) loadArticleById({ id })
    }

    render() {
        return (
            <div>
                <a href = "#" onClick = {this.select.bind(this)} >select</a>
                {this.props.getHint()}
                {this.getTitle()}
                <CSSTransition transitionName="example" transitionAppear={true}
                               transitionAppearTimeout={500}
                               transitionEnterTimeout={500}
                               transitionLeaveTimeout={300}>
                    {this.getBody()}
                </CSSTransition>
            </div>
        )
    }

    getTitle() {
        const {showHint, hideHint, onClick, selected, article: { title }} = this.props
        const selectedStyle = selected ? {color: 'red'} : null;
        return  (
            <h3 style = {selectedStyle} onClick={onClick}  onMouseEnter = {showHint(title)} onMouseLeave={hideHint}>
                {title}
            </h3>
        )
    }

    getBody() {
        if (!this.props.isOpen) return null
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

    select(ev) {
        ev.preventDefault()
        this.props.select()
    }
}

export default withHint(Article)