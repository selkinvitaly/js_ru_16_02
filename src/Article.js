import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import CSSTransition from 'react-addons-css-transition-group'
import withHint from './HOC/withHint'
import { deleteArticle } from './actions/articles'
require('./style.css')

class Article extends Component {
    static propTypes = {
        article: PropTypes.object,

        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

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
        return (
            <div key="article">
                <a href="#" onClick = {this.handleDeleteArticle}>delete this article</a>
                <p>{article.body}</p>
                <CommentList comments = {article.getRelation('comments')} />
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