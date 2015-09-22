import React       from 'react';
import CommentsItem from './CommentsItem';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  comments : state.comments
});
export class CommentsList extends React.Component {
  static propTypes = {
    dispatch : React.PropTypes.func,
    comments: React.PropTypes.array
  }

  constructor () {
    super();
  }

  getInitialState () {
    return {};
  }

  hasEntries () {
    return typeof this.props.comments === 'array' && this.props.comments.length > 0;
  }

  renderComments () {
    return this.props.comments.map(function renderCommentsItem(item) {
      return (
        <CommentsItem data={item}/>
      );
    });
  }


  render () {
    return (
      <div className='container text-center'>
        {this.hasEntries() ? this.renderComments : 'Empty list'}
      </div>
    );
  }
}

export default connect(mapStateToProps)(CommentsList);
