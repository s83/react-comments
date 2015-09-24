import Route from 'react-router';
import React from 'react';
import App  from 'containers/App';
import NotFound from 'components/NotFound';
import CommentsList from 'components/CommentsList';
import NewComment from 'components/NewComment';

export default (
  <Route component={App}>
    <Route path="/" component={CommentsList} />
    <Route path='/comment/new' component={NewComment} />
    <Route path="*" component={NotFound}/>
  </Route>
);
