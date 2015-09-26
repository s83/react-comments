import React from 'react';
import { Glyphicon, ListGroupItem } from 'react-bootstrap';
import Gravatar from 'react-gravatar';
import moment from 'moment';
import Spaces from 'components/Spaces';

export class CommentsItem extends React.Component {
  static propTypes = {
    dispatch : React.PropTypes.func,
    username: React.PropTypes.string,
    email: React.PropTypes.string,
    link: React.PropTypes.string,
    content: React.PropTypes.string,
    date: React.PropTypes.number
  }

  constructor () {
    super();
  }

  renderLink () {
    let link = '';
    if (this.props.link) {
      link = (
        <span>
          <Spaces/>
          <a href={this.props.link}>
            {this.props.link}
          </a>
        </span>
      );
    }

    return link;
  }

  renderFooter () {
    const date = new Date(this.props.date);
    return (
      <div>
        <div className="pull-right">
          at {date.toLocaleTimeString()}, {date.toLocaleDateString()}
        </div>
        <div>
          From
          <Spaces/>
          <a href={`mailto:${this.props.email}`}>
            <strong>{this.props.username}</strong>
          </a>
          {this.renderLink()}
          </div>
      </div>
    );
  }

  renderUserUrlIcon () {
    const hasPrefix = /^(https?:\/\/)/i.exec(this.props.link);
    const prefix = hasPrefix === null ? 'http://' : '';
    return (
      <a href={`${prefix}${this.props.link}`} target="_blank">
        <Glyphicon glyph="glyphicon glyphicon-link"/>
      </a>
    );
  }

  renderUserIcons () {
    return (
      <span style={{fontSize: 'x-small'}}>
        <Spaces/>
        <a href={`mailto:${this.props.email}`}>
          <Glyphicon glyph="glyphicon glyphicon-envelope"/>
        </a>
        <Spaces/>
        {this.props.link ? this.renderUserUrlIcon() : ''}
      </span>
    );
  }

  render () {
    return (
      <ListGroupItem>
          <div className="media">
            <div className="media-left">
              <Gravatar default="identicon" className="comment-gravatar" email={this.props.email} />
            </div>
            <div className="media-body">
              <div className="pull-right comment-date">
                <Glyphicon className="comment-middle-align" glyph="glyphicon glyphicon-time"/>
                <Spaces/>
                {moment(this.props.date).fromNow()}
              </div>
              <h2 className="comment-title">
                <span className="comment-username">{this.props.username}</span>
                {this.renderUserIcons()}
              </h2>
              {this.props.content}
            </div>
          </div>
      </ListGroupItem>
    );
  }
}

export default CommentsItem;
