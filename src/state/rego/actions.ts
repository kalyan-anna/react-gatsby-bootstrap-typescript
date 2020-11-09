import { createAction } from '@reduxjs/toolkit';
import {
  API_ERROR,
  LOAD_REGISTRATIONS_REQUEST,
  LOAD_REGISTRATIONS_SUCCESS,
  RegoDetails,
} from './types';

export const loadRegistrationsRequest = createAction(
  LOAD_REGISTRATIONS_REQUEST,
);
export const loadRegistrationsSuccess = createAction<RegoDetails[]>(
  LOAD_REGISTRATIONS_SUCCESS,
);
export const apiError = createAction<string>(API_ERROR);
