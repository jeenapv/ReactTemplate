import { takeLatest, call, put, select, fork, takeEvery } from 'redux-saga/effects';
import API from '../../utils/api';
import createValidator from './createValidator';
import Notifications from 'react-notification-system-redux';
// import AuthService from 'utils/AuthService';

import { GET_API_DATA, CHANGE_VALUE, SUBMIT, SUBMITTED, VALIDATE } from './constants';

import {
  setValid,
  setInvalid,
  setSubmitting,
  setSubmitted,
  validate,
  submitSuccess,
  submitError,
  clearFormFields,
} from './actions';

let Auth;
const notificationOpts = {
  title: 'LOGIN SUCCESSFUL',
  message: 'Welcome to Aumet',
  position: 'tc',
  autoDismiss: 5,
};

function* handleValidate(action) {
  const { validation, field } = action;
  if (Array.isArray(validation)) {
    yield validation.map((v) =>
      call(handleValidate, {
        ...action,
        validation: v,
      }),
    );
    return;
  }

  const validator = yield call(createValidator, validation);
  const value = yield select((state) => state.login.toJS().fields[field].value);
  try {
    const valid = yield call(validator.test, value);
    const error = validator.report(value);
    if (valid) {
      yield put(setValid(field, error));
    } else {
      yield put(setInvalid(field, error));
    }
  } catch (e) {
    // console.log(e);
  }
}

function* handleSubmit(action) {
  const { validations, handler } = action;
  const state = yield select((state) => state);
  const fieldsNotValidated = Object.keys(state.login.toJS().fields).reduce((notValidated, name) => {
    const field = state.login.toJS().fields[name];

    if (field.validated) {
      return notValidated;
    }
    return notValidated.concat(name);
  }, []);
  if (fieldsNotValidated.length) {
    yield fieldsNotValidated.map((name) => put(validate(name, validations[name])));
  } else {
    const values = Object.keys(state.login.toJS().fields).reduce((vals, name) => {
      vals[name] = state.login.toJS().fields[name].value;
      return vals;
    }, {});

    yield put(setSubmitting());
    yield put(setSubmitted(values, handler));
  }
}

function* handleAfterSubmit(action) {
  const { handler, values } = action;
  try {
    yield call(handler, 'value');

    // api call
    const auth = yield call(API.auth.login, values);
    if (auth.result && auth.result.status) {
      localStorage.setItem('admin_token', auth.result.token);
      yield put(submitSuccess(auth));
      yield call(handler, auth);
      yield put(Notifications.success(notificationOpts));
    } else {
      notificationOpts.title = auth.error.err;
      notificationOpts.message = auth.error.message;
      yield put(Notifications.error(notificationOpts));
      yield put(submitError(auth));
    }
  } catch (e) {
    console.log('e', e);
  }
}

function* login(action) {
  const { field } = action;
  const value = yield select((state) => state.login.toJS().fields);
}

function* LoginSaga() {
  // yield takeLatest(GET_API_DATA, getApiData);
  yield fork(takeEvery, CHANGE_VALUE, login);
  yield fork(takeEvery, VALIDATE, handleValidate);
  yield fork(takeEvery, SUBMIT, handleSubmit);
  yield fork(takeEvery, SUBMITTED, handleAfterSubmit);
}

export default LoginSaga;
