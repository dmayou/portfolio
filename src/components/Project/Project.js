import React, { Component } from 'react';
import { Grid, Card, CardContent, CardMedia, CardActions, IconButton, Typography } from '@material-ui/core';
import GitHubIcon from '../GitHubIcon/GitHubIcon';
import HerokuLogo from '../HerokuLogo/HerokuLogo';

class Project extends Component {
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
                        <IconButton><GitHubIcon/></IconButton>
                    </CardActions>
                </Card>
            </Grid>
        );
    }
}

export default Project;