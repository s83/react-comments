import React from 'react';
import { connect } from 'react-redux';
import { Navbar, CollapsibleNav, Nav, NavItem, Glyphicon } from 'react-bootstrap';
import { PATH_COMMENT_NEW, PATH_COMMENT_LIST } from 'constants';
import { Link } from 'react-router';

@connect(state => ({
  dispatch: state
}))
export class Header extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    location: React.PropTypes.object
  }

  getMenus() {
    let output;
    switch (this.props.location.pathname) {
    case PATH_COMMENT_NEW:
      output = (
          <NavItem eventKey={1} href={PATH_COMMENT_LIST}>
          <Glyphicon glyph="glyphicon glyphicon-chevron-left"/> Go Back
          </NavItem>
        );
      break;
    default:
      output = (
        <NavItem eventKey={1} href={PATH_COMMENT_NEW}>
          <Glyphicon glyph="glyphicon glyphicon-pencil"/> New comment
        </NavItem>
      );
    }
    return output;
  }

  render () {
    const homeUrl = (<Link to="/"><Glyphicon glyph="leaf"/> React-comments</Link>);
    return (
      <Navbar className="myNav" brand={homeUrl} toggleNavKey={0} staticTop inverse>
        <CollapsibleNav eventKey={0}>
          <Nav navbar right>
            {this.getMenus()}
          </Nav>
        </CollapsibleNav>
      </Navbar>
    );
  }
}
