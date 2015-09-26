import React                from 'react';
import ReactDOM             from 'react-dom';
import Root                 from 'containers/Root';
import configureStore       from './store/configureStore';
import createHistory          from 'history/lib/createHashHistory';

const target = document.getElementById('root');
const store  = configureStore(window.__INITIAL_STATE__);
const history = createHistory();

const node = <Root routerHistory={history} store={store}/>;
ReactDOM.render(node, target);
