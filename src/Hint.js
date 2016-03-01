import React, { Component, PropTypes } from 'react'
const style = {
    position: 'fixed',
    backgroundColor: 'black',
    top: 0,
    height: 50,
    color: 'white'
}

class Hint extends Component {
    static propTypes = {
        text: PropTypes.string
    };

    render() {
        return (
            <div style={style}>
                {this.props.text}
            </div>
        )
    }
}

export default Hint