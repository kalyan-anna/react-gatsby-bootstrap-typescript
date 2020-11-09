import { combineReducers } from '@reduxjs/toolkit';
import { regoReducer } from './rego';

const rootReducer = combineReducers({
  rego: regoReducer,
});

export default rootReducer;
