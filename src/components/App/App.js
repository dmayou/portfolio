import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMuiTheme, Grid, Snackbar } from '@material-ui/core';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import ButtonAppBar from '../ButtonAppBar/ButtonAppBar';
import ProjectList from '../ProjectList/ProjectList';

import 'typeface-roboto';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    htmlFontSize: '8px',
  },
  // palette: { // commented out because some colors break snackbar
  //   background: {
  //     paper: beige,
  //     default: gray,
  //   },
  // },
});

const styles = {
  root: {
    width: '100%',
    maxWidth: 250,
    direction: 'row',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    direction: 'row',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  paper: {
    maxWidth: '600px',
  },
  card: {
    maxWidth: '400px',
  },
};

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    const { snackbar } = this.props.store;
    return (
        <MuiThemeProvider theme={theme}>
          <CssBaseline /> 
          <ButtonAppBar />
          <Grid container >
            <ProjectList />        
          </Grid>
          <Snackbar 
            open={snackbar.open} 
            message={snackbar.message}
          />
        </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (store) => {
  return({
    store
  });
};

export default connect(mapStateToProps)(withStyles(styles)(App));