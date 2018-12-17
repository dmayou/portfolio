import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, TextField } from '@material-ui/core';

import SelectTag from '../SelectTag/SelectTag';

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
        console.log('in clearForm()');
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
            console.log('after clearForm:', this.state);
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
        console.log('tag id:', id);
    }
    render() {
        const { project } = this.state;
        return (
            <form>
                <TextField 
                    label='Name'
                    value={project.name}
                    onChange={this.handleChange('name')}
                />
                <TextField
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
                    label='GitHub URL'
                    value={project.github}
                    onChange={this.handleChange('github')}
                />
                <TextField
                    label='Website URL'
                    value={project.website}
                    onChange={this.handleChange('website')}
                />
                <TextField
                    label='Thumbnail Image URL'
                    value={project.thumbnail}
                    onChange={this.handleChange('thumbnail')}
                />
                <TextField
                    label='Description'
                    value={project.description}
                    onChange={this.handleChange('description')}
                    multiline rowsMax='5'
                />
                <Button
                    onClick={this.handleClick}
                    variant="contained"
                    default
                    >Add Project
                </Button>
            </form>
        );
    }
}

export default connect()(ProjectForm);