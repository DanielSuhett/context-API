import React, { Component } from 'react'
import context from "./Context";

class ThemedButton extends Component {
    render() {
        const props = this.props
        let theme = this.context
        return (
            <div>
                <button className="buttonTheme"
                    {...props} >
                <img alt="" src={theme.theme === 'dark' ? 'moon.png' : 'sunny.png' } />
                </button>
            </div>
        )
    }
}

ThemedButton.contextType = context;

export default ThemedButton
