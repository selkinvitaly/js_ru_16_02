import React, { Component, PropTypes } from 'react'
import { login } from '../actions/user'

class NewArticle extends Component {

    static contextTypes = {
        user: PropTypes.string
    }

    getContent() {
        return <h2>New Article Page</h2>
    }

    loginRequired() {
        return <div>
            <p>You need login:</p>
            <p><button onClick={this.login}>Login</button></p>
        </div>
    }

    login = (ev) => {
        ev.preventDefault()
        login()
    }

    render() {
        return (
            <div>
                this.context.user ? {this.getContent()} : {this.loginRequired()}
            </div>
        )
    }
}

export default NewArticle
