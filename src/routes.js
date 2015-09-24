import Route from 'react-router';
import React from 'react';
import App  from 'containers/App';
import NotFound from 'components/NotFound';
import CommentsList from 'components/CommentsList';
import NewComment from 'components/NewComment';
import { PATH_COMMENT_NEW, PATH_COMMENT_LIST } from 'constants';

export default (
  <Route component={App}>
    <Route path={PATH_COMMENT_LIST} component={CommentsList} />
    <Route path={PATH_COMMENT_NEW} component={NewComment} />
    <Route path="*" component={NotFound}/>
  </Route>
);
