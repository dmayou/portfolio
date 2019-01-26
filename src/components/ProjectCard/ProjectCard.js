import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Card, CardMedia, CardActions, IconButton, Typography } from '@material-ui/core';
import GitHubIcon from '../GitHubIcon/GitHubIcon';
import HerokuLogo from '../HerokuLogo/HerokuLogo';

const styles = theme => ({
    card: {
        margin: theme.spacing.unit,
    },
    media: {
        maxHeight: 400,
        padding: '40%',
    },
    heading: {
        margin: theme.spacing.unit,
    },
    body: {
        margin: theme.spacing.unit,
    },
});

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
        const { classes } = props;
        return (
            <Grid key={props.id} item xs={12} sm={6}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={`/images/${props.thumbnail}`}
                        title=''
                    />
                    <Typography variant='h2' className={classes.heading}>
                        {props.name}
                    </Typography>
                    <Typography variant='body1' className={classes.body}>
                        {props.description}
                    </Typography>
                    <Typography className={classes.body}>
                        Tags: {props.tag_name}
                    </Typography>
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

export default connect()(withStyles(styles)(Project));