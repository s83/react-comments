import { createReducer } from 'utils';

// normally this would be imported from /constants, but in trying to keep
// this starter kit as small as possible we'll just define it here.
const COMMENTS_LIST = 'COMMENTS_LIST';

const initialState = {
  'comments': {
    '1': {'comment': 'yes'}
  }
};
export default createReducer(initialState, {
  [COMMENTS_LIST] : (state) => state
});
