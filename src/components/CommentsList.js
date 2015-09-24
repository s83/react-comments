import React       from 'react';
import CommentsItem from './CommentsItem';
import { connect } from 'react-redux';
import { ListGroup, Button } from 'react-bootstrap';
import { PATH_COMMENT_NEW } from 'constants';

console.log(PATH_COMMENT_NEW);

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

  hasEntries () {
    return this.props.comments.length > 0;
  }

  renderComments () {
    const ListGroupItems = this.props.comments.map((item, i) => (
      <CommentsItem key={i} {...item}/>
    ));

    return (
      <ListGroup>
        {ListGroupItems}
      </ListGroup>
    );
  }

  renderEmpty () {
    return (
      <div className="text-center">
        <h1>There are no comments yet!</h1>
        <p>why not be the first?</p>
        <p style={{ marginTop: 30}}>
          <Button bsStyle="info" bsSize="large" href={PATH_COMMENT_NEW}>
            Start here
          </Button>
        </p>
      </div>
    );
  }

  render () {
    return (
      <div className='container'>
        {this.hasEntries() ? this.renderComments() : this.renderEmpty()}
      </div>
    );
  }
}

export default connect(mapStateToProps)(CommentsList);
