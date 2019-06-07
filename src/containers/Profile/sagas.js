import { takeLatest, call, put, select, fork, takeEvery } from 'redux-saga/effects';
import API from '../../utils/api';
// import createValidator from './createValidator';
import Notifications from 'react-notification-system-redux';
import * as jwt_decode from 'jwt-decode';

import {
  GET_ADMIN_DATA,
} from './constants';

function* profile() {
  console.log(99212);
  const token = localStorage.getItem('admin_token');
  var decoded = jwt_decode(token);
  console.log(decoded);
  localStorage.setItem('admin_data',JSON.stringify(decoded));
}

function* ProfileSaga() {
  yield takeLatest(GET_ADMIN_DATA, profile);
}

export default ProfileSaga;
