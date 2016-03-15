import React, { Component, PropTypes } from 'react'

class ArticlePage extends Component {
    static propTypes = {

    };

    render() {
        const {params: { id }} = this.props
        console.log('---', this.props);
        return (
            <div>
                <h1>Article Page... for id: {id}</h1>
            </div>
        )
    }
}

export default ArticlePage