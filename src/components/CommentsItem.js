import React       from 'react';

export class CommentsItem extends React.Component {
  static propTypes = {
    dispatch : React.PropTypes.func,
    comment: React.PropTypes.object.required
  }

  constructor () {
    super();
  }

  getInitialState () {
    return {};
  }

  render () {
    return (
      <div className='container text-center'>
        <div>{this.props.comment.content}</div>
        <div>{this.props.comment.username}</div>
        <div>{this.props.comment.email}</div>
        <div>{this.props.comment.link}</div>
        <div>{this.props.comment.creationDate}</div>
      </div>
    );
  }
}

export default CommentsItem;
