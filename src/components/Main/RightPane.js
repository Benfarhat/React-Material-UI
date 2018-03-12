import React, { Component } from 'react'
import { Paper } from 'material-ui'

export default class RightPane extends Component {
    render(props) {
        return (
            <Paper style={this.props.style}>
                Right Pane
            </Paper>
        )
    }
}