import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography } from '@material-ui/core';

const styles = theme => ({
    title: {
        margin: theme.spacing.unit,
    },
    textField: {
        margin: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

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
        const { classes } = this.props;
        return (
            <form>
                <Typography variant={'h2'} className={classes.title}>
                    Add Tag
                </Typography>
                <TextField
                    className={classes.textField}
                    label='Tag Name'
                    value={this.state.newTag}
                    onChange={this.handleChange}
                />
                <Button
                    className={classes.button}
                    onClick={this.handleClick}
                    variant="contained"
                    default
                >Add Tag
                </Button>
            </form>
        );
    }
}

export default connect()(withStyles(styles)(TagForm));