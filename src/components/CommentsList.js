import React       from 'react';
import CommentsItem from './CommentsItem';
import { connect } from 'react-redux';
import { ListGroup, Button, Glyphicon} from 'react-bootstrap';
import { PATH_COMMENT_NEW } from 'constants';
import Spaces from 'components/Spaces';

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
      <div>
      <h1>
        Discussions
        <Spaces/>
        <Button bsStyle="success" className="pull-right" href={PATH_COMMENT_NEW}>
          <Glyphicon glyph="glyphicon glyphicon-plus"/>
        </Button>
      </h1>
      <ListGroup className="box-shadow">
        {ListGroupItems}
      </ListGroup>
      </div>
    );
  }

  renderEmpty () {
    return (
      <div className="text-center">
        <h1>There are no comments yet!</h1>
        <p>why not be the first?</p>
        <p style={{ marginTop: 30}}>
          <Button bsStyle="success" bsSize="large" href={PATH_COMMENT_NEW}>
            Show some
            <Spaces/>
            <Glyphicon glyph="glyphicon glyphicon-heart"/>
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
