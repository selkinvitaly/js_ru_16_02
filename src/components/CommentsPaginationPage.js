import React, { Component, PropTypes } from 'react'
import {commentStore} from '../stores'

class CommentsIndex extends Component {
    static propTypes = {

    };

    static contextTypes = {
        lang: PropTypes.object
    }

    componentDidMount() {
        commentStore.addChangeListener(this.change)
    }

    componentWillUnmount() {
        commentStore.removeChangeListener(this.change)
    }

    constructor(props, context) {
        super(props, context)
        const { page } = props.params
        this.state = this.getState(page)
    }

    getState(page) {
        return {
            comments: commentStore.getOrLoadForPage(page),
            loading: commentStore.loading.includes(page),
            loaded: commentStore.loaded[page]
        }
    }

    change = (props) => {
        const { page } =  (props || this.props).params
        this.setState(this.getState(page))
    }

    componentWillReceiveProps(props) {
        this.change(props)
    }

    render() {
        const { loading, loaded, comments } = this.state
        if (!loaded || loading) return <h1>{this.context.lang.loading}</h1>
        if (!comments.length) return <h1>{this.context.lang.noComments}</h1>
        const commentItems = comments.map(comment =>
            <li key = {comment.id}>{comment.text}</li>
        )
        return (
            <div>
                <ul>
                    {commentItems}
                </ul>
            </div>
        )
    }
}

export default CommentsIndex
