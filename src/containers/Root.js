import React, { Component, PropTypes } from 'react'
import AppContainer from './AppContainer'
import { Provider } from 'react-redux'

class Root extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    };

    render() {
        return (
            <Provider store={this.props.store}>
                <AppContainer />
            </Provider>
        )
    }
}

export default Root