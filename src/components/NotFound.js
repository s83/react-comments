import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { PATH_COMMENT_LIST } from 'constants';
import Spaces from 'components/Spaces';

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
        <div style={{marginTop: 30}}>
        <Button bsStyle="primary" href={PATH_COMMENT_LIST}>
          Go to Homepage<Spaces size={2}/><Glyphicon glyph="glyphicon glyphicon-thumbs-up"/>
        </Button>
        </div>
      </div>
    );
  }
}

export default Welcome;
