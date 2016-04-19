react-comments 
=======================

**Simple comments application**

built on top of the client-only version of the starter kit [react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit).

**Demo live : http://s83.github.io/react-comments/**

Table of Contents
-----------------
1. [Requirements](#requirements)
1. [Features](#features)
1. [Usage](#usage)

Requirements
------------

Node (`^4.0.0` | `^0.12.0`) or io.js `^2.0.0`.

Features
--------

* [React](https://github.com/facebook/react) (`0.14.0-rc1`)
  * Includes react-addons-test-utils (`0.14.0-rc1`)
* [react-router](https://github.com/rackt/react-router) (`1.0.0-rc1`)
* [Redux](https://github.com/gaearon/redux) (`^3.0.0`)
  * react-redux
  * redux-devtools
    * use `npm run dev:nw` to display in a separate window.
* [Babel](https://github.com/babel/babel)
  * `react-transform-webpack-hmr` for hot reloading
  * `react-transform-catch-errors` for more visible error reporting
  * Uses babel runtime rather than inline transformations
* [Webpack](https://github.com/webpack/webpack)
    * Splits core application code from vendor dependencies
  * webpack-dev-server
  * sass-loader with CSS extraction
  * eslint-loader
    * Uses [Airbnb's eslint config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) (with some softened rules)
    * Configured to fail production builds on error

Usage
-----

#### `npm run dev` also `npm start`
Runs the webpack build system just like in `compile` but enables HMR. The webpack dev server can be found at `localhost:3000`.

#### `npm run dev:nw`
Same as `npm run dev` but opens the debug tools in a new window.

#### `npm run dev:no-debug`
Same as `npm run dev` but disables devtools.

#### `npm run compile`
Runs the Webpack build system with your current NODE_ENV and compiles the application to disk (`~/dist`). Production builds will fail on eslint errors (but not on warnings).

#### `npm run test`
Runs all tests for the application. When run in a production build, failing tests will fail your build.

#### `npm run test:watch`
Similar to `npm run test`, but only runs unit tests. This will run in watch mode and re-run individual test files when they change.

#### `npm run deploy`
Helper script to run tests and then, on success, compile the application.
