import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './assets/css/bootstrap.min.css';
import './assets/css/styles/black.css';
import './assets/css/panel.css';
import './assets/css/pages/dataTables.bootstrap.css';
import './assets/css/pages/tables.css';
import './assets/css/metisMenu.css';
import './assets/css/main.css';

import store, { history } from './store';
import App from './containers/App';


const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App history={history} />
    </ConnectedRouter>
  </Provider>,
  target,
);
