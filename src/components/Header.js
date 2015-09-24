import React from 'react';
import { connect } from 'react-redux';
import { Navbar, CollapsibleNav, Nav, NavItem, Glyphicon } from 'react-bootstrap';

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
    case '/write':
      output = (
          <NavItem eventKey={1} href="/">
          <Glyphicon glyph="glyphicon glyphicon-chevron-left"/> Go Back
          </NavItem>
        );
      break;
    default:
      output = (
        <NavItem eventKey={1} href="/write">
          <Glyphicon glyph="glyphicon glyphicon-pencil"/> New comment
        </NavItem>
      );
    }
    return output;
  }

  render () {
    return (
      <Navbar className="myNav" brand="React-Comments" toggleNavKey={0} staticTop inverse>
        <CollapsibleNav eventKey={0}>
          <Nav navbar right>
            {this.getMenus()}
          </Nav>
        </CollapsibleNav>
      </Navbar>
    );
  }
}
