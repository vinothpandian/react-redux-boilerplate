import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { injectGlobal } from 'emotion';
import Routes from './routes';
import store from './store';

injectGlobal('#root {height: 100%}');

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ff616f',
      main: '#ff1744',
      dark: '#c4001d',
      contrastText: '#000000',
    },
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
