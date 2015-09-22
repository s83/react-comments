import React       from 'react';

export class CommentsItemForm extends React.Component {
  static propTypes = {
    dispatch : React.PropTypes.func
  }

  constructor () {
    super();
  }

  render () {
    return (
      <form className='container text-center'>
        <h1>Write a comment</h1>
        <div>
          <label>Name</label>
          <input name="name"/>
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email"/>
        </div>
        <div>
          <label>Name</label>
          <input type="textarea" name="message"/>
        </div>
        <div>
          <button type="submit">Save</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    );
  }
}

export default CommentsItemForm;
