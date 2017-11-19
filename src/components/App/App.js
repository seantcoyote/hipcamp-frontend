import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import featuresData from '../../camp_features';
import CampFeatures from '../CampFeatures'
import './App.css';

class App extends Component {
  render() {
    return (
      <Paper className="App" zDepth={1}>
        <header className="AppHeader">
          <h1 className="AppTitle">Camp Features</h1>
        </header>

        <CampFeatures features={featuresData}/>
      </Paper>
    );
  }
}

export default App;
