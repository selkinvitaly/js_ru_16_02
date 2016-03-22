import React, { PropTypes, Component as ReactComponent} from 'react'

export default (Component) => class extends ReactComponent {
    static contextTypes = {
        i18n: PropTypes.object.isRequired
    }
    render() {
        return <Component {...this.props} translate = {this.translate}/>
    }

    translate = (text) => this.context.i18n[text]
}