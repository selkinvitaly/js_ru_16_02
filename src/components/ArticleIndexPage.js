import React, { Component, PropTypes } from 'react'

class ArticleIndexPage extends Component {
    static propTypes = {

    };

    static contextTypes = {
        lang: PropTypes.object
    }

    render() {
        return (
            <div>
                <h1>{this.context.lang.indexArticle}</h1>
            </div>
        )
    }
}

export default ArticleIndexPage
