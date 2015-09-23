import React from 'react';

export class Welcome extends React.Component {
  static propTypes = {
    dispatch : React.PropTypes.func
  }

  constructor () {
    super();
  }

  render () {
    return (
      <div className='container text-center'>
        <h1>Not found</h1>
        <p>Sorry, that page does not exist</p>
      </div>
    );
  }
}

export default Welcome;
