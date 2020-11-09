import { takeLatest, put, call } from 'redux-saga/effects';
import { LOAD_REGISTRATION_REQUEST } from './types';
import { registrationService } from 'services';
import { loadRegistrationsSuccess } from './actions';

function* loadRegistration() {
  const data = yield call(registrationService.load);
  console.log('data:', data);
  yield put(loadRegistrationsSuccess());
}

export const regoSaga = [
  takeLatest(LOAD_REGISTRATION_REQUEST, loadRegistration),
];
