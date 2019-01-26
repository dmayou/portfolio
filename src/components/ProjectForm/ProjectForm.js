import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography } from '@material-ui/core';

import SelectTag from '../SelectTag/SelectTag';

const styles = theme => ({
    title: {
        margin: theme.spacing.unit,
        marginTop: theme.spacing.unit * 3,
    },
    textField: {
        margin: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class ProjectForm extends Component {
    state = {
        project: {
            name: '',
            description: '',
            thumbnail: '',
            website: '',
            github: '',
            date_completed: '',
            tag_id: '0', // to select blank list choice
        }
    }
    clearForm() {
        this.setState({
            // values are not null so that controlled Textfields show correct value
            project: { 
                name: '',
                description: '',
                thumbnail: '',
                website: '',
                github: '',
                date_completed: '',
                tag_id: '0'
            }
        });
    }
    handleChange = (key) => (event) => {
        this.setState({
            project: {
                ...this.state.project, [key]: event.target.value
            }
        });
    }
    handleClick = () => {
        if (this.state.project.name) { // name is required
            const newProject = this.translateInputs();
            this.props.dispatch({ type: 'ADD_PROJECT', payload: newProject });
            this.clearForm();
        } else {
            this.displaySnackBar(
                'Name is a required field.',
                3500
            );
        }
    }
    translateInputs = () => {
        // inputs with zero length should be saved as null in database
        // if no tag selected, tag_id should be null as that is join on field
        const { project } = this.state;
        return ({
            name: project.name, // will always have value
            description: project.description !== '' ? project.description : null,
            thumbnail: project.thumbnail !== '' ? project.thumbnail : null,
            website: project.website !== '' ? project.website : null,
            github: project.github !== '' ? project.github : null,
            date_completed: project.date_completed !== '' ? project.date_completed : null,
            tag_id: project.tag_id > 0 ? project.tag_id : null,
        });
    }
    displaySnackBar = (msg, dwell) => {
        this.props.dispatch({
            type: 'SHOW_SNACKBAR',
            payload: { message: msg, dwell: dwell }
        });
    }
    setTag = (id) => {
        this.setState({
            project: {
                ...this.state.project, tag_id: id
            }
        });
    }
    render() {
        const { project } = this.state;
        const { classes } = this.props;
        return (
            <form>
                <div>
                <Typography className={classes.title} variant={'h2'}>
                    Add New Project
                </Typography>
                <TextField 
                    className={classes.textField}
                    label='Name'
                    value={project.name}
                    onChange={this.handleChange('name')}
                />
                <TextField
                    className={classes.textField}
                    label='Date Completed'
                    value={project.date_completed}
                    onChange={this.handleChange('date_completed')}
                    type='date'
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <SelectTag value={project.tag_id} setTag={this.setTag} />
                <TextField
                    className={classes.textField}
                    label='GitHub URL'
                    value={project.github}
                    onChange={this.handleChange('github')}
                />
                <TextField
                    className={classes.textField}
                    label='Website URL'
                    value={project.website}
                    onChange={this.handleChange('website')}
                />
                <TextField
                    className={classes.textField}
                    label='Thumbnail Image URL'
                    value={project.thumbnail}
                    onChange={this.handleChange('thumbnail')}
                />
                <TextField
                    className={classes.textField}
                    label='Description'
                    value={project.description}
                    onChange={this.handleChange('description')}
                    multiline rowsMax='5'
                />
                </div>
                <div>
                <Button
                    className={classes.button}
                    onClick={this.handleClick}
                    variant="contained"
                    default
                    >Add Project
                </Button>
                </div>
            </form>
        );
    }
}

export default connect()(withStyles(styles)(ProjectForm));