import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'state/store';
import { RegoState } from './types';

const getRegoState = (state: RootState) => state.rego as RegoState;

const loading = createSelector(getRegoState, ({ loading }) => loading);

const registrations = createSelector(
  getRegoState,
  ({ registrations }) => registrations,
);

const regoDetails = (plateNumber: string) =>
  createSelector(getRegoState, ({ registrations }) =>
    registrations.find(rego => rego.plate_number === plateNumber),
  );

export const regoSelectors = {
  loading,
  registrations,
  regoDetails,
};
