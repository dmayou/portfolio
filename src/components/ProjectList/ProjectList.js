import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import ProjectCard from '../ProjectCard/ProjectCard';

class ProjectList extends Component {
    render() {
        const projectList = this.props.store.projects.map( (proj) => {
            // map null db fields to empty strings
            if (proj.description === null) proj.description = '';
            if (proj.thumbnail === null) proj.thumbnail = '';
            if (proj.date_completed === null) proj.date_completed = '';
            if (proj.github === null) proj.github = '';
            if (proj.website === null) proj.website = '';
            if (proj.tag_name === null) proj.tag_name = '';
            return (
                <Grid item key={proj.id}>
                    <ProjectCard {...proj} />
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