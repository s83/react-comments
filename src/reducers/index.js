import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import comments from './comments';

const reducers = {
  comments,
  form: formReducer
};

export default combineReducers(reducers);
