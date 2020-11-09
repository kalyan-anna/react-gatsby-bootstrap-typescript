import { createReducer } from '@reduxjs/toolkit';
import {
  API_ERROR,
  LOAD_REGISTRATIONS_REQUEST,
  LOAD_REGISTRATIONS_SUCCESS,
  RegoState,
} from './types';

const defaultState: RegoState = {
  registrations: [],
  error: null,
  loading: false,
};

export const regoReducer = createReducer<RegoState>(defaultState, {
  [LOAD_REGISTRATIONS_REQUEST]: (state: RegoState) => {
    state.loading = true;
    return state;
  },
  [LOAD_REGISTRATIONS_SUCCESS]: (state: RegoState, action) => {
    state.loading = false;
    state.registrations = action.payload;
    return state;
  },
  [API_ERROR]: (state: RegoState, action) => {
    state.error = action.payload;
    state.loading = false;
    return state;
  },
});
