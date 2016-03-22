import React, { Component, PropTypes } from 'react'
import AppContainer from './AppContainer'
import DevTools from './DevTools'
import { Provider } from 'react-redux'

class Root extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    };

    render() {
        return (
            <Provider store={this.props.store}>
                <div>
                    <AppContainer />
                    <DevTools />
                </div>
            </Provider>
        )
    }
}

export default Root