import React, { Component } from 'react'
import Hint from '../components/Hint'

export default function (CustomComponent) {
    return class extends Component {
        state = {
            text: null
        }

        render() {
            const { showHint, hideHint, getHint } = this
            return <CustomComponent
                {...this.state}
                {...{ showHint, hideHint, getHint }}
                {...this.props}
            />
        }

        getHint = () => {
            const { text } = this.state
            return text ? <Hint text = {this.state.text} /> : null
        };

        showHint = (text) => (ev) => this.setState({ text });

        hideHint = () => {
            this.setState({
                text: null
            })
        };
    }
}
