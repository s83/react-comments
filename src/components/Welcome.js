import React       from 'react';

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
        <h1>Welcome</h1>
      </div>
    );
  }
}

export default Welcome;
