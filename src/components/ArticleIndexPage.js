import React, { Component, PropTypes } from 'react'
import translate from '../HOC/Translate'

class ArticleIndexPage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>{this.props.translate('Index page for articles')}</h1>
            </div>
        )
    }
}

export default translate(ArticleIndexPage)