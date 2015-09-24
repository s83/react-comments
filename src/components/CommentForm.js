import React from 'react';
import { connectReduxForm } from 'redux-form';
import { validateComment } from 'utils';
import { FORM_COMMENT_ID } from 'constants';
import { Input } from 'react-bootstrap';
import Spaces from 'components/Spaces';
import { Glyphicon, Button, ButtonToolbar, Panel } from 'react-bootstrap';
import { PATH_COMMENT_LIST } from 'constants';

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

  hasError (field) {
    return field.error && field.touched;
  }

  renderError (field) {
    return (
      <div className="comment-error">
        <Glyphicon glyph="glyphicon glyphicon-exclamation-sign"/>
        <Spaces/>
        {field.error}
      </div>
    );
  }

  render () {
    const { fields: {username, email, link, content}, handleSubmit } = this.props;
    const disabledSubmit = username.error || email.error || link.error || content.error;
    return (
        <form onSubmit={handleSubmit.bind(this)}>
          <Panel className="comment-panel box-shadow">
            <Input
              type="text"
              label="Full Name *"
              bsStyle={this.hasError(username) && 'error'}
              required
              {...username}/>
            { this.hasError(username) && this.renderError(username) }
            <Input
              type="email"
              label="E-mail *"
              required
              bsStyle={this.hasError(email) && 'error'} {...email}/>
            { this.hasError(email) && this.renderError(email) }
            <Input
              type="textarea"
              label="Message *"
              bsStyle={this.hasError(content) && 'error'} {...content}/>
              { this.hasError(content) && this.renderError(content) }
            <Input
              type="text"
              label="Site"
              bsStyle={this.hasError(link) && 'error'} {...link}/>
            { this.hasError(link) && this.renderError(link) }
          </Panel>
          <ButtonToolbar>
            <Button
              href={PATH_COMMENT_LIST}
              className
              >
              Cancel</Button>
            <Button
              type="submit"
              bsStyle={disabledSubmit ? '' : 'success'}
              bsSize="large"
              bsStyle={disabledSubmit ? 'primary' : 'success'}
              className="pull-right"
              disabled={disabledSubmit}
              onClick={handleSubmit.bind(this)}>
              Save {disabledSubmit ? '' : <Glyphicon glyph="glyphicon glyphicon-ok"/>}
            </Button>
          </ButtonToolbar>
        </form>
    );
  }
}

export default CommentsItemForm;
