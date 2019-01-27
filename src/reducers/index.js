import { combineReducers } from 'redux';

import { list } from './list.reducer';
import { item } from './item.reducer';

export const rootReducer = combineReducers({
  list,
  item
});
