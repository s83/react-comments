import React from 'react';
import {Route} from 'react-router';

import {
    HelloWorld,
    // NotFound,
  } from './containers';

export default function(store) {
  return (
    <Route component={App}>
      <Route path="/" component={HelloWorld}/>
      // <Route path="*" component={NotFound}/>
    </Route>
  );
}
