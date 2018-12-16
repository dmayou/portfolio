import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Settings from '@material-ui/icons/Settings';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class ButtonAppBar extends Component {
    changeView = (direction) => {
        const { history } = this.props;
        switch (history.location.pathname) {
            case '/' :
                history.push('/admin');
                console.log('in admin case');
                break;
            case '/admin' :
            default : 
                history.push('/');
        }
    }
    render() {
        const { classes } = this.props;
        const buttons =
            <div>
                {this.props.history.location.pathname === '/admin' ?
                    <Button onClick={this.changeView}>View Projects</Button>
                :
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <Settings onClick={this.changeView} />
                    </IconButton>
                }
            </div>;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h2" color="inherit" className={classes.grow}>
                            David Mayou's Full-stack Software Portfolio
                        </Typography>
                        {buttons}
                    </Toolbar>
                </AppBar>
            </div>
        )
    };
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(ButtonAppBar));