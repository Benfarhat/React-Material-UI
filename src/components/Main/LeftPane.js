import React, { Component } from 'react'
import { Paper } from 'material-ui'

export default class LeftPane extends Component {
    render(props) {
        return (
            <Paper style={this.props.style}>
                Left Pane
            </Paper>
        )
    }
}
