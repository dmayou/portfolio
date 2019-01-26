import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Card, CardContent, CardMedia, CardActions, IconButton, Typography } from '@material-ui/core';
import GitHubIcon from '../GitHubIcon/GitHubIcon';
import HerokuLogo from '../HerokuLogo/HerokuLogo';

class Project extends Component {
    handleLinkClick = (keyName, siteName) => () => { 
        const link = this.props[keyName];
        if (link !== '') {
            window.open(link);
        } else {
            this.displaySnackBar(
                `This project has no ${siteName} link.`,
                3500
            );
        }
    }
    displaySnackBar = (msg, dwell) => {
        this.props.dispatch({
            type: 'SET_SNACKBAR',
            payload: {
                open: true,
                vertical: 'bottom',
                horizontal: 'center',
                message: msg
            }
        });
        setTimeout(() => {
            this.props.dispatch({
                type: 'SET_SNACKBAR',
                payload: { open: false }
            });
            },
            dwell
        );
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
                        <IconButton 
                            onClick={this.handleLinkClick('website', 'website')}>
                            <HerokuLogo/>
                        </IconButton>
                        <IconButton 
                            onClick={this.handleLinkClick('github', 'GitHub')}>
                            <GitHubIcon/>
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
        );
    }
}

export default connect()(Project);