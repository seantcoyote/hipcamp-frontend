import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const AppWithMuiTheme = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
)

ReactDOM.render(<AppWithMuiTheme />, document.getElementById('root'));
registerServiceWorker();
