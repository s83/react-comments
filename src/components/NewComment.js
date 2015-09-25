import React from 'react';
import CommentForm from 'components/CommentForm';
import { initialize } from 'redux-form';
import { connect } from 'react-redux';
import { addComment } from 'actions';
import { FORM_COMMENT_ID } from 'constants';

@connect(state => ({
  dispatch: state
}))
export class newComment extends React.Component {

  static propTypes = {
    dispatch: React.PropTypes.func,
    history: React.PropTypes.object
  }

  constructor () {
    super();
  }

  handleSubmit(data) {
    // save form
    this.props.dispatch(addComment(data));
    // clear form inputs
    this.props.dispatch(initialize( FORM_COMMENT_ID, {}));
    // show comments
    this.props.history.pushState(null, '/');
  }

  render () {
    return (
      <div className='container'>
        <h1>New comment</h1>
        <CommentForm onSubmit={this.handleSubmit.bind(this)}/>
      </div>
    );
  }
}

export default newComment;
