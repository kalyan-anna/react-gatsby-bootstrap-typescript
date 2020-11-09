import { createReducer } from '@reduxjs/toolkit';
import {
  API_ERROR,
  LOAD_REGISTRATION_REQUEST,
  LOAD_REGISTRATION_SUCCESS,
  RegoState,
} from './types';

const defaultState: RegoState = {
  registrations: [],
  error: null,
  loading: false,
};

export const regoReducer = createReducer<RegoState>(defaultState, {
  [LOAD_REGISTRATION_REQUEST]: (state: RegoState) => {
    state.loading = true;
    return state;
  },
  [LOAD_REGISTRATION_SUCCESS]: (state: RegoState, action) => {
    state.loading = false;
    return state;
  },
  [API_ERROR]: (state: RegoState, action) => {
    state.error = action.payload;
    state.loading = false;
    return state;
  },
});
