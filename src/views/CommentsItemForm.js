import React       from 'react';

export class CommentsItemForm extends React.Component {
  static propTypes = {
    dispatch : React.PropTypes.func
  }

  constructor () {
    super();
  }

  handleSubmit = () => {
    let values = {};
    // let node = this.refs['todo-input'].getDOMNode();
    var Object.keys(this.refs).forEach( item => {
      values[item] = this.refs[item].getDOMNode().value;
    });

    this.props.createComment(values);
  }

  render () {
    return (
      <div className='container text-center'>
        <h1>Write a comment</h1>
        <div>
          <label>Username</label>
          <input name="username" ref="username"/>
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" ref="email"/>
        </div>
        <div>
          <label>Link</label>
          <input type="text" name="link" ref="link"/>
        </div>
        <div>
          <label>Name</label>
          <input type="textarea" name="content" ref="content"/>
        </div>
        <div>
          <button type="submit"  onClick={this.handleSubmit}>Save</button>
          <button type="reset">Reset</button>
        </div>
      </div>
    );
  }
}

export default CommentsItemForm;
