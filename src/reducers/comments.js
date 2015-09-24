import { ADD_COMMENT } from 'constants/ActionTypes';

const initialState = [];

export default function comments(state = initialState, action) {
  switch (action.type) {
  case ADD_COMMENT:
    return [...state, action.comment];
  default:
    return state;
  }
}
