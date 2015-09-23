import { Route }   from 'react-router';
import React       from 'react';
import App  from 'containers/App';
import Welcome from 'components/Welcome';
import CommentsList from 'components/CommentsList';
import CommentsItemForm from 'components/CommentsItemForm';

export default (
  <Route component={App}>
    <Route name='home' path='/' component={Welcome} />
    <Route name='list' path='/list' component={CommentsList} />
    <Route name='create' path='/create' component={CommentsItemForm} />
  </Route>
);
