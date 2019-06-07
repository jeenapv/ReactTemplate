import { fork, all } from 'redux-saga/effects';

import appSagas from './containers/App/sagas';
import LoginSaga from './containers/Login/sagas';
import ProfileSaga from './containers/Profile/sagas';

const sagas = [
  appSagas,
  LoginSaga,
  ProfileSaga,
  // NOTE: put other app sagas here
];

function* globalSagas() {
  const globalSagasForks = sagas.map((saga) => fork(saga));

  yield all([...globalSagasForks]);
}

export default globalSagas;
