import { createSelector } from '@reduxjs/toolkit';
import { RegoState } from './types';

const getRegoState = (state: RootState) => state.rego as RegoState;

const loading = createSelector(getRegoState, ({ loading }) => loading);

export const regoSelectors = {
  loading,
};
