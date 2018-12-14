import { combineReducers } from 'redux';

import videos from './videos';
import search from './search';

export default combineReducers({
  videos,
  search,
});
