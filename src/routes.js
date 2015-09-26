import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App  from 'containers/App';
import NotFound from 'components/NotFound';
import CommentsList from 'components/CommentsList';
import NewComment from 'components/NewComment';
import { ROUTE_COMMENT_NEW } from 'constants';

export default [
  <Route key="route" component={App} path="/">
    <IndexRoute component={CommentsList} />
    <Route path={ROUTE_COMMENT_NEW} component={NewComment} />
  </Route>,
  <Route key="notFound" path="*" component={NotFound}/>
];
