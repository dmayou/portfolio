import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import Project from '../Project/Project';

class ProjectList extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_PROJECTS' });
        // this.props.dispatch({ type: 'FETCH_TAGS' }); // save for admin
    }
    render() {
        const projectList = this.props.store.projects.map( (proj) => {
            return (
                <Grid item>
                    <Project {...proj} />
                </Grid>
            );
        });
        return (
            projectList
        );
    }
}

const mapStateToProps = (store) => {
    return ({
        store
    });
}

export default connect(mapStateToProps)(ProjectList);