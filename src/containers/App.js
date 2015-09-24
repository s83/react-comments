import React from 'react';
import 'styles/core.scss';

// bootstrap
import '../../node_modules/react-bootstrap/dist/react-bootstrap.js';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import { Header } from 'components/Header';

export default class App extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  constructor () {
    super();
  }

  render () {
    return (
      <div className='app'>
          <Header {...this.props}/>
          <div className="container">
          {this.props.children}
          </div>
      </div>
    );
  }
}
