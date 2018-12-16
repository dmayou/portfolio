import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { IconButton } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';

class AdminProjectList extends Component {
    handleClick = (id) => {
        console.log('delete clicked, id=', id);
    }
    render() {
    const projectList = this.props.store.projects.map( (project) => {
        return (
            <TableRow key={project.id}>
                <TableCell>{project.name}</TableCell>
                <TableCell><IconButton onClick={()=>this.handleClick(project.id)}>
                        <Delete />
                    </IconButton>
                </TableCell>
            </TableRow>
        );
    });
    console.log('projectList:', projectList);
    return(
        <Paper>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Project Name</TableCell>
                    <TableCell>Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {projectList}
            </TableBody>
        </Table>
        </Paper>
    );
    }
}

const mapStoreToProps = (store) => {
    return ({
        store
    })
};

export default connect(mapStoreToProps)(AdminProjectList);