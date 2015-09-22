import { Route }   from 'react-router';
import React       from 'react';
import CoreLayout  from 'layouts/CoreLayout';
import Welcome    from 'views/Welcome';
import CommentsItemForm    from 'views/CommentsItemForm';
import CommentsList    from 'views/CommentsList';


export default (
  <Route component={CoreLayout}>
    <Route name='home' path='/' component={Welcome} />
    <Route name='list' path='/list' component={CommentsList} />
    <Route name='create' path='/create' component={CommentsItemForm} />
  </Route>
);
