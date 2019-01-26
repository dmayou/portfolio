import React, { Component } from 'react';
import { connect } from 'react-redux';
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
                <ProjectCard key={proj.id} {...proj} />
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