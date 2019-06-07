import { createSelector } from 'reselect';

// Need to use .get, beucase reducer defaulState was created by using ImmutableJS

const selectLogin = (state) => state.login;

const selectApiData = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('fields').toJS()
);

export {
  selectApiData
};
