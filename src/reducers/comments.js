import { ADD_COMMENT } from '../constants/ActionTypes';

const initialState = [];

export default function comments(state = initialState, action) {
  switch (action.type) {
  case ADD_COMMENT:
    action.comment.date = Date.now();
    return [action.comment, ...state];
  default:
    return state;
  }
}
