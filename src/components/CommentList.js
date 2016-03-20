import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from './../HOC/toggleOpen'
import { addComment, loadCommentsForArticle } from './../actions/comment'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object,

        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    static contextTypes = {
        router: PropTypes.object,
        user: PropTypes.string,
        lang: PropTypes.object
    }

    state = {
        comment: ''
    }

    componentWillReceiveProps(newProps) {
        if (!newProps.isOpen || this.props.isOpen || this.checkComments(newProps)) return
        loadCommentsForArticle({
            articleId: newProps.article.id
        })
    }

    render() {
        const { isOpen, toggleOpen } = this.props
        const actionText = isOpen ? this.context.lang.hideComments : this.context.lang.showComments

        return (
            <div>
                <a href = "#" onClick = {toggleOpen}>{actionText}</a>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
//        console.log('--- context: ', this.context.user);
        const { article, isOpen } = this.props
        if (!isOpen) return null
        if (!this.checkComments()) return <h3>{this.context.lang.loadingComments}</h3>
        const commentList = article.getRelation('comments').map(comment => <li key={comment.id}><Comment comment = {comment}/></li>)
        return (
            <div>
                user: {this.context.user}
                <ul>{isOpen ? commentList : null}</ul>
                <input value = {this.state.comment} onChange = {this.commentChange}/>
                <a href = "#" onClick = {this.submitComment}>{this.context.lang.addComment}</a>
            </div>
        )
    }

    commentChange = (ev) => {
        this.setState({
            comment: ev.target.value
        })
    }

    submitComment = (ev) => {
        ev.preventDefault()
        addComment(this.state.comment, this.props.article.id)
        this.setState({
            comment: ''
        })
    }

    toggleOpen = (ev) => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    checkComments(props) {
        props = props || this.props
        return !(props.article.getRelation('comments').includes(undefined))
    }
}

export default toggleOpen(CommentList)
