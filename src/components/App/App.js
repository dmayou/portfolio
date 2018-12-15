import React, { Component } from 'react';
import { createMuiTheme, Grid } from '@material-ui/core';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import ButtonAppBar from '../ButtonAppBar/ButtonAppBar';
import Project from '../Project/Project';
import { beige, gray } from '@material-ui/core/colors';

import 'typeface-roboto';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    htmlFontSize: '8px',
  },
  palette: {
    background: {
      paper: beige,
      default: gray,
    }
  },
});

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 250,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  card: {
    maxWidth: 345,
  },
});

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <CssBaseline /> 
          <ButtonAppBar />
          <Grid container>
            <Project />        
            <Project />        
          </Grid>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);