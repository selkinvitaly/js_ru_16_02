import React, { Component, PropTypes } from 'react'
import {commentStore} from '../stores'
import {Link} from 'react-router'

class CommentsIndex extends Component {
    static propTypes = {

    };
    componentDidMount() {
        commentStore.addChangeListener(this.change)
    }

    componentWillUnmount() {
        commentStore.removeChangeListener(this.change)
    }

    state = {
        total: null
    }

    change = () => {
        this.setState({
            total: commentStore.getTotal()
        })
    }

    render() {
        return (
            <div>
                {this.getLinks()}
                {this.props.children}
            </div>
        )
    }

    getLinks() {
        const { total } = this.state
        if (!total) return null
        const links = Array.apply(null, Array(Math.floor(total / 10) + 1))
            .map((el, index) => <li key = {index}><Link to={`/comments/${index + 1}`}>{index + 1}</Link></li>)
        return <ul>{links}</ul>
    }
}

export default CommentsIndex