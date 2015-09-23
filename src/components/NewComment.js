import React from 'react';
import CommentForm from 'components/CommentForm';
import {connect} from 'react-redux';
import {initialize} from 'redux-form';

export class newComment extends React.Component {

  constructor () {
    super();
  }

  handleSubmit(data) {
    console.log('Submission received!', data);
    this.props.dispatch(initialize('contact', {})); // clear form
  }

  render () {
    return (
      <div className='container text-center'>
        <h1>Write a new comment</h1>
        <CommentForm onSubmit={this.handleSubmit.bind(this)}/>
      </div>
    );
  }
}

export default connect()(newComment);  // adds dispatch prop
