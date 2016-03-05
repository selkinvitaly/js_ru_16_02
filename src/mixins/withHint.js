import React from 'react'
import Hint from '../components/Hint'

export default {
    getInitialState() {
        return {
            text: null
        }
    },
    getHint() {
        const { text } = this.state
        return text ? <Hint text = {this.state.text} /> : null
    },
    showHint(text) {
        return (ev) => this.setState({ text })
    },
    hideHint() {
        this.setState({
            text: null
        })
    }
}