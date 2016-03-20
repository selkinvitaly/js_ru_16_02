import React, { Component, PropTypes } from 'react'
import { login } from '../actions/user'

class NewArticle extends Component {

    static contextTypes = {
        user: PropTypes.string,
        lang: PropTypes.object
    }

    getContent() {
        return <h2>{this.context.lang.newArticlePage}</h2>
    }

    loginRequired() {
        return <div>
            <p>{this.context.lang.needLogin}</p>
            <p><button onClick={this.login}>{this.context.lang.login}</button></p>
        </div>
    }

    login = (ev) => {
        ev.preventDefault()
        login()
    }

    render() {
        return (
            <div>
                {this.context.user ? this.getContent() : this.loginRequired()}
            </div>
        )
    }
}

export default NewArticle
