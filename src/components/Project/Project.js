import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Card, CardContent, CardMedia, CardActions, IconButton, Typography } from '@material-ui/core';
import GitHubIcon from '../GitHubIcon/GitHubIcon';
import HerokuLogo from '../HerokuLogo/HerokuLogo';

class Project extends Component {
    handleGitHubClick = () => { 
        if (this.props.github.length !== 0) {
            window.open(this.props.github);
        } else {
            this.props.dispatch({ 
                type: 'SET_SNACKBAR', 
                payload: { 
                    open: true,
                    vertical: 'bottom',
                    horizontal: 'center',
                    message: 'This project has no GitHub link.'
                }
            });
            setTimeout( () => {
                    this.props.dispatch({
                        type: 'SET_SNACKBAR',
                        payload: {open: false}
                    })},
                3500
            );
        }
    }
    render() {
        const { props } = this;
        return (
            <Grid key={props.id} item>
                <Card>
                    <CardContent>
                        <Typography variant='h2'>
                            {props.name}
                        </Typography>
                        <CardMedia
                            style={{ minHeight: '400px', width: '95%', paddingTop: 'auto' }}
                            image={`/images/${props.thumbnail}`}
                            title=''
                        />
                        <Typography variant='body1'>
                            {props.description}
                        </Typography>
                        <Typography>
                            Tags: {props.tag_name}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton><HerokuLogo/></IconButton>
                        <IconButton onClick={this.handleGitHubClick}><GitHubIcon/></IconButton>
                    </CardActions>
                </Card>
            </Grid>
        );
    }
}

export default connect()(Project);