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
        <div>{this.props.comment.message}</div>
        <div>{this.props.comment.name}</div>
        <div>{this.props.comment.email}</div>
      </div>
    );
  }
}

export default CommentsItem;
