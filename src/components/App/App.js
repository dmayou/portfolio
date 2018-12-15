import React, { Component } from 'react';
import { createMuiTheme, Grid } from '@material-ui/core';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import ButtonAppBar from '../ButtonAppBar/ButtonAppBar';
import Project from '../Project/Project';

import 'typeface-roboto';

const styles = {
  root: {
    width: '100%',
    maxWidth: 500,
  },
};

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <ButtonAppBar />
          <Grid container>
            <Project />        
          </Grid>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);