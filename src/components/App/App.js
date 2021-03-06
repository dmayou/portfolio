import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from "react-router-dom";
import { createMuiTheme, Grid, Snackbar } from '@material-ui/core';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import ButtonAppBar from '../ButtonAppBar/ButtonAppBar';
import ProjectList from '../ProjectList/ProjectList';
import AdminView from '../AdminView/AdminView';

import 'typeface-roboto';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    htmlFontSize: '8px',
  },
});

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_PROJECTS' });
  }
  render() {
    const { snackbar } = this.props;
    return (
        <MuiThemeProvider theme={theme}>
          <Router>
            <div>
              <CssBaseline /> 
              <ButtonAppBar />
              <Grid container >
                <Route path="/" exact component={ProjectList} />
                <Route path="/admin" component={AdminView} />
              </Grid>
            </div>
          </Router>
          <Snackbar 
            open={snackbar.open} 
            message={snackbar.message}
          />
        </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({ snackbar }) => ({ snackbar });

export default connect(mapStateToProps)(App);