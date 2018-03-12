import React, { Component } from 'react'
import { Grid } from 'material-ui'
import RightPane from './RightPane'
import LeftPane from './LeftPane'

const style = {
    Paper: {
        padding: 20,
        marginTop: 10,
        margnBottom: 10
    }
}
export default class Main extends Component {
    render() {
        return (
            <Grid container>
                <Grid item sm={6}>
                    <LeftPane style={style.Paper}>
                        Left
                    </LeftPane>
                </Grid>
                <Grid item sm={6}>
                    <RightPane style={style.Paper}>
                        Right
                    </RightPane>
                </Grid>
            </Grid>
        )
    }
}
