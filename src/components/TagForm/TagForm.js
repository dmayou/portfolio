import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, TextField } from '@material-ui/core';

class TagForm extends Component {
    state = {
        newTag: ''
    }
    clearForm() {
        this.setState({
            newTag: ''
        });
    }
    handleChange = (event) => {
        this.setState({
            newTag: event.target.value
        });
    }
    handleClick = () => {
        if (this.state.newTag) { // cannot be blank
            this.props.dispatch({ type: 'ADD_TAG', payload: this.state.newTag });
            this.clearForm();
        } else {
            this.displaySnackBar(
                'You must enter a tag to add.',
                3500
            );
        }
    }
    displaySnackBar = (msg, dwell) => {
        this.props.dispatch({
            type: 'SHOW_SNACKBAR',
            payload: { message: msg, dwell: dwell }
        });
    }
    render() {
        return (
            <form>
                <TextField
                    label='Tag Name'
                    value={this.state.newTag}
                    onChange={this.handleChange}
                />
                <Button
                    onClick={this.handleClick}
                    variant="contained"
                    default
                >Add Tag
                </Button>
            </form>
        );
    }
}

export default connect()(TagForm);