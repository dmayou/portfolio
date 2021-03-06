import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { IconButton, Typography } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';

const styles = theme => ({
    title: {
        margin: theme.spacing.unit,
    },
});

class AdminProjectList extends Component {
    handleClick = (id) => {
        this.props.dispatch({ type: 'DELETE_PROJECT', payload: { id: id } });
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
    return(
        <div>
            <br/>
            <Typography variant={'h2'} className={this.props.classes.title}>
                List of Projects
            </Typography>
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
        </div>
    );
    }
}

const mapStoreToProps = (store) => {
    return ({
        store
    })
};

export default connect(mapStoreToProps)(withStyles(styles)(AdminProjectList));