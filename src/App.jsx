import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CssBaseline from 'material-ui/CssBaseline';
import { createMuiTheme } from 'material-ui/styles';
import red from 'material-ui/colors/red';
import { injectGlobal } from 'emotion';
import Routes from './routes';
import store from './store';

injectGlobal('#root {height: 100%}');

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
});

export default () => (
  <Provider store={store}>
    <React.Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    </React.Fragment>
  </Provider>
);
