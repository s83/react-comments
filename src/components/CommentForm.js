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
    handleSubmit: React.PropTypes.func.isRequired,
    handleReset: React.PropTypes.func.isRequired
  }

  constructor () {
    super();
  }

  /**
   * Evaluate field status based on errors and touch event
   * @param  {object}  field
   * @return {Boolean|null} returns null when not ready
   */
  hasError (field) {
    return field.touched ? field.error !== null : null;
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

  renderBsStyle () {
    const keys = Object.keys(this.props.fields);
    /* eslint-disable prefer-const */
    let output = {};
    /* eslint-enable prefer-const */
    keys.forEach((key) => {
      const error = this.hasError(this.props.fields[key]);
      output[key] = error === null ? {} : { 'bsStyle': error ? 'error' : 'success' };
    });
    return output;
  }

  render () {
    const { fields: {username, email, link, content}, handleSubmit, handleReset } = this.props;
    const disabledSubmit = !!( username.error || email.error || link.error || content.error );
    const bsStyle = this.renderBsStyle();

    return (
        <form onSubmit={handleSubmit.bind(this)}>
          <Panel className="comment-panel box-shadow">
            <Input
              type="text"
              label="Full Name *"
              required
              {...bsStyle.username}
              {...username}
            />
          { this.hasError(username) ? this.renderError(username) : ''}
            <Input
              type="email"
              label="E-mail *"
              required
              {...bsStyle.email}
              {...email}
              />
            { this.hasError(email) ? this.renderError(email) : ''}
            <Input
              type="textarea"
              label="Message *"
              {...bsStyle.content}
              {...content}
            />
          { this.hasError(content) ? this.renderError(content) : ''}
            <Input
              type="text"
              label="Site"
              {...bsStyle.link}
              {...link}
            />
          { this.hasError(link) ? this.renderError(link) : ''}
          </Panel>
          <ButtonToolbar>
            <Button
              href={PATH_COMMENT_LIST}
              onClick={handleReset.bind(this)}
              >
              Cancel</Button>
            <Button
              type="submit"
              bsStyle={disabledSubmit ? 'warning  ' : 'success'}
              bsSize="large"
              bsStyle={disabledSubmit ? 'primary' : 'success'}
              className="pull-right"
              disabled={disabledSubmit}
              title={ disabledSubmit ? 'Please fill required fields or enter correct values' : 'Submit changes' }
              onClick={handleSubmit.bind(this)}>
              Save {disabledSubmit ? '' : <Glyphicon glyph="glyphicon glyphicon-ok"/>}
            </Button>
          </ButtonToolbar>
        </form>
    );
  }
}

export default CommentsItemForm;
