import React       from 'react';

export class HomeView extends React.Component {
  static propTypes = {
    dispatch : React.PropTypes.func
  }

  constructor () {
    super();
  }

  render () {
    return (
      <div className='container text-center'>
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default HomeView;
