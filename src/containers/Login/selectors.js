import { createSelector } from 'reselect';

const selectAppContainer = (state) => state.containers.appReducer;

// Need to use .get, beucase reducer defaulState was created by using ImmutableJS
const selectApiData = (state) => selectAppContainer(state).get('apiData');

const selectLogin = (state) => state.login;
const selectNotification = (state) => state;

const getFields = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('fields').toJS()
);
const getValid = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('valid')
);
const submitErr = () => createSelector(
  selectNotification,
  (submit) => submit.notifications
)

export {
  getValid,
  selectLogin,
  getFields,
  selectApiData,
  submitErr
};
