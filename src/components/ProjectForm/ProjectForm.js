import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, TextField } from '@material-ui/core';

import SelectTag from '../SelectTag/SelectTag';

class ProjectForm extends Component {
    state = {
        project: {
            name: null,
            description: null,
            thumbnail: null,
            website: null,
            github: null,
            date_completed: null,
            tag_id: null,
        }
    }
    handleChange = (key) => (event) => {
        this.setState({
            project: {
                ...this.state.project, [key]: event.target.value
            }
        });
    }
    handleClick = () => {
        this.props.dispatch({ type: 'ADD_PROJECT', payload: this.state.project});
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
        return (
            <form>
                <TextField 
                    label='Name'
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                />
                <TextField
                    label='Date Completed'
                    value={this.state.date_completed}
                    onChange={this.handleChange('date_completed')}
                    type='date'
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <SelectTag setTag={this.setTag} />
                <TextField
                    label='GitHub URL'
                    value={this.state.github}
                    onChange={this.handleChange('github')}
                />
                <TextField
                    label='Website URL'
                    value={this.state.website}
                    onChange={this.handleChange('website')}
                />
                <TextField
                    label='Thumbnail Image URL'
                    value={this.state.thumbnail}
                    onChange={this.handleChange('thumbnail')}
                />
                <TextField
                    label='Description'
                    value={this.state.description}
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