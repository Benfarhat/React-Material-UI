import React, { Component } from 'react'
import { Grid, Typography } from 'material-ui'
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
        console.log(this.props.prestations)
        return (
            <Grid container>
                <Grid item sm={6}>
                    <LeftPane style={style.Paper}>
                        {this.props.prestations.map(prestation => (<Typography variant="body1" key={prestation.id} gutterBottom align="right">{prestation.title}</Typography>))}
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
