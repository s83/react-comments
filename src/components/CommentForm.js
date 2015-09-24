import React from 'react';
import {connectReduxForm} from 'redux-form';
import { validateComment } from 'utils';
import FORM_COMMENT_ID from 'constants';

// apply connectReduxForm() and include synchronous validation
@connectReduxForm({
  form: FORM_COMMENT_ID,
  fields: ['username', 'email', 'link', 'content'],
  validate: validateComment
})
export class CommentsItemForm extends React.Component {
  static propTypes = {
    fields: React.PropTypes.object.isRequired,
    handleSubmit: React.PropTypes.func.isRequired
  }

  constructor () {
    super();
  }

  render () {
    const { fields: {username, email, link, content}, handleSubmit } = this.props;
    return (
      <form className='container text-center' onSubmit={handleSubmit.bind(this)}>
        <div>
          <label>Username</label>
          <input type="text" {...username}/>
          {username.error && username.touched && <div>{username.error}</div>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" {...email}/>
          {email.error && email.touched && <div>{email.error}</div>}
        </div>
        <div>
          <label>Link</label>
          <input type="text" {...link}/>
          {link.error && link.touched && <div>{link.error}</div>}
        </div>
        <div>
          <label>Content</label>
          <input type="textarea" {...content}/>
          {content.error && content.touched && <div>{content.error}</div>}
        </div>
        <div>
          <button type="submit" onClick={handleSubmit.bind(this)}>Save</button>
        </div>
      </form>
    );
  }
}

export default CommentsItemForm;
