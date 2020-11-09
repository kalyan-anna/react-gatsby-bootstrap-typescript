import { takeLatest, put, call } from 'redux-saga/effects';
import { LOAD_REGISTRATIONS_REQUEST, RegoDetails } from './types';
import { registrationService } from 'services';
import { loadRegistrationsSuccess } from './actions';

function* loadRegistration() {
  const data = yield call(registrationService.load);
  yield put(loadRegistrationsSuccess(data as RegoDetails[]));
}

export const regoSaga = [
  takeLatest(LOAD_REGISTRATIONS_REQUEST, loadRegistration),
];
