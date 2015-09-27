import { assert } from 'chai';

import reducer from '../src/reducers/comments';
import * as types from '../src/constants/ActionTypes';

describe('comments reducer', () => {
  it('should return the initial state', () => {
    assert.deepEqual(
      reducer(undefined, {})
    , []);
  });

  it('should handle ADD_COMMENT', () => {
    const store = [{
      username: 'unit test',
      email: 'unit@test.org',
      link: 'react.com',
      content: 'Redux unit test',
      date: Date.now()
    }];

    const action = {
      type: types.ADD_COMMENT,
      comment: {
        username: 'unit test 2',
        email: 'unit2@test.org',
        link: 'react.com/2',
        content: 'Redux unit test 2',
        date: Date.now()
      }
    };

    const date = Date.now();
    const testedReducer = reducer(store, action);
    const expectedStore = [action.comment, ...store];

    action.comment.date = date;

    assert.deepEqual(
      testedReducer
    , expectedStore);
  });
});
