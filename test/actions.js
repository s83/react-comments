import { assert } from 'chai';
import * as actions from '../src/actions';
import * as types from '../src/constants/ActionTypes';

describe('actions', () => {
  it('should create an action to add a comment', () => {
    const comment = 'unit test';
    const expectedAction = {
      type: types.ADD_COMMENT,
      comment
    };
    assert.deepEqual(actions.addComment(comment), expectedAction);
  });
});
