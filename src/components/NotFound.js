import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class NotFound extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>Sory, route not found, go here: <Link to="/articles">articles</Link></h1>
            </div>
        )
    }
}

export default NotFound