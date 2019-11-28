import { combineReducers } from 'redux';

import registers from './registers/reducer';

const reducers = combineReducers({
  registers,
});

export default reducers;
