import React from 'react';
import { Router, Route } from 'react-router';
import Routes from './routes';
import { Provider } from 'react-redux';

const store = {};

React.render(
  <Provider store={store}>
    {() =>
      <Router>
        {Routes}
      </Router>
    }
  </Provider>,
  document.getElementById('root')
);
