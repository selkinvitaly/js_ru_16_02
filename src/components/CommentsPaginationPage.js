import React, { Component, PropTypes } from 'react'
import {commentStore} from '../stores'

class CommentsIndex extends Component {
    static propTypes = {

    };
    componentDidMount() {
        commentStore.addChangeListener(this.change)
    }

    componentWillUnmount() {
        commentStore.removeChangeListener(this.change)
    }

    constructor(props) {
        super(props)
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
        console.log('---', 321, this);
        //debugger;
        this.setState(this.getState(page))
    }

    componentWillReceiveProps(props) {
        this.change(props)
    }

    render() {
        return (
            <div>
                <h1>Hello world</h1>
            </div>
        )
    }
}

export default CommentsIndex