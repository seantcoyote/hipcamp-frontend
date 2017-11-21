import React, {Component} from 'react';
import {object} from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import featuresData from '../../camp_features';
import FeaturesList from '../FeaturesList';
import './App.css';

const App = () => (
  <MuiThemeProvider>
    <Paper className="App" zDepth={1}>
      <header className="AppHeader">
        <h1 className="AppTitle">Camp Features</h1>
      </header>
      <FeaturesList features={featuresData}/>
    </Paper>
  </MuiThemeProvider>
);

export default App;
