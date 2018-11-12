import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import configureStore from './store';
import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import history from './history';
import theme from './theme';

const { store } = configureStore();

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <ThemeProvider theme={theme.styled}>
        <MuiThemeProvider theme={theme.material}>
          <App />
        </MuiThemeProvider>
      </ThemeProvider>
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
