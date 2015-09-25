import React from 'react';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import Validator from 'validator';
import ReactDom from 'react-dom';

export function createConstants (...constants) {
  return constants.reduce((acc, constant) => {
    acc[constant] = constant;
    return acc;
  }, {});
}

export function createReducer (initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type];

    return reducer ? reducer(state, action.payload) : state;
  };
}

export function createDevToolsWindow(store) {
  // give it a name so it reuses the same window
  const win = window.open(null, 'redux-devtools', 'menubar=no,location=no,resizable=yes,scrollbars=no,status=no');

  // reload in case it's reusing the same window with the old content
  win.location.reload();

  win.document.write('<div id="react-devtools-root"></div>');

  // wait a little bit for it to reload, then render
  setTimeout(() => {
    ReactDom.render(
      (
        <DebugPanel top right bottom left key="debugPanel">
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      ), win.document.getElementById('react-devtools-root'));
  }, 500);
}

export function validateComment(data) {
  const errors = {};
  if (!data.username) {
    errors.username = 'Your name is required';
  }
  if (!data.email ) {
    errors.email = 'Your e-mail is required';
  }else if (!Validator.isEmail(data.email)) {
    errors.email = 'Please enter a valid e-mail address';
  }
  if (data.link && !Validator.isFQDN(data.link)) {
    errors.link = 'Please enter a valid url';
  }
  if (!data.content) {
    errors.content = 'Please enter your message';
  } else if (data.content && data.content.length > 1024) {
    errors.content = 'Must be fewer than 1024 characters';
  }
  return errors;
}
