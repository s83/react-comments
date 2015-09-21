import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired
  }

  static contextTypes = {
    router: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        <header>Header</header>
        <div>
          {this.props.children}
        </div>
        <footer>
          Footer
        </footer>
      </div>
    );
  }
}
