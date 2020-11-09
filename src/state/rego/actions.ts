import { createAction } from '@reduxjs/toolkit';
import {
  API_ERROR,
  LOAD_REGISTRATION_REQUEST,
  LOAD_REGISTRATION_SUCCESS,
} from './types';

export const loadRegistrationsRequest = createAction(LOAD_REGISTRATION_REQUEST);
export const loadRegistrationsSuccess = createAction(LOAD_REGISTRATION_SUCCESS);
export const apiError = createAction<string>(API_ERROR);
