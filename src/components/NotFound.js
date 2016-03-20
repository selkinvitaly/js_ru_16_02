import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { articlesStore, usersStore, langsStore } from '../stores'

class NotFound extends Component {
    static propTypes = {

    };

    static contextTypes = {
        lang: PropTypes.object
    }

    render() {
        return (
            <div>
                <h1>{langsStore.getDict().ru.noRoutes}: <Link to="/articles">articles</Link></h1>
            </div>
        )
    }
}

export default NotFound
