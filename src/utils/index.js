import React from 'react';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

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

export function createDevToolsWindow (store) {
  const win = window.open(
    null,
    'redux-devtools', // give it a name so it reuses the same window
    'menubar=no,location=no,resizable=yes,scrollbars=no,status=no'
  );

  // reload in case it's reusing the same window with the old content
  win.location.reload();

  // wait a little bit for it to reload, then render
  setTimeout(() => {
    React.render(
      <DebugPanel top right bottom left >
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
      , win.document.body);
  }, 10);
}

export function validateComment(data) {
  const errors = {};
  if (!data.username) {
    errors.username = 'Required';
  }
  if (!data.email) {
    errors.email = 'Must be an email';
  }
  if (!data.link) {
    errors.phone = 'Must a valid url';
  }
  if (!data.content) {
    errors.content = 'Required';
  } else if (data.content && data.content.length > 255) {
    errors.content = 'Must be fewer than 255 characters';
  }
  return errors;
}
