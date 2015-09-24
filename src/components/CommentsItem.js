import React from 'react';

export class CommentsItem extends React.Component {
  static propTypes = {
    dispatch : React.PropTypes.func,
    username: React.PropTypes.string.required,
    email: React.PropTypes.string.required,
    link: React.PropTypes.string.required,
    content: React.PropTypes.string.required,
    date: React.PropTypes.number.required
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
        <div>{this.props.content}</div>
        <div>{this.props.username}</div>
        <div>{this.props.email}</div>
        <div>{this.props.link}</div>
        <div>{this.props.date}</div>
      </div>
    );
  }
}

export default CommentsItem;
