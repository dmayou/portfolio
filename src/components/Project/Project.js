import React, { Component } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

class Project extends Component {
    render() {
        console.log('props', this.props);
        return (
            <Grid item>
                <Paper>
                    <Typography variant='h3'>
                        My project
                    </Typography>
                </Paper>
            </Grid>
        );
    }
}

export default Project;