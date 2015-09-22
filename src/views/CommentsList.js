import React       from 'react';
import CommentsItem from './CommentsItem';

export class CommentsList extends React.Component {
  static propTypes = {
    dispatch : React.PropTypes.func,
  }

  constructor () {
    super();
  }

  getInitialState () {
    return {};
  }

  renderComments () {
    return this.props.comments.map(function renderCommentsItem(item) {
      return (
        <CommentsItem data={item}/>
      );
    });
  }

  render () {
    console.log(this.props);
    return (
      <div className='container text-center'>
        {this.props.comments.length > 0 ? this.renderComments : 'Empty list'}
      </div>
    );
  }
}

export default CommentsList;
