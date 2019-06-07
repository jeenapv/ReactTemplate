/*
  * Notification selector
*/

import { createSelector } from 'reselect';

// export const selectAppContainer = (state) => state.containers.appReducer;
//
// // Need to use .get, beucase reducer defaulState was created by using ImmutableJS
// export const selectApiData = (state) => selectAppContainer(state).get('apiData');

const selectState = (state) => state;
// console.log(selectState);

const selectNotifications = () => createSelector(
  selectState,
  (notificationState) => notificationState.notifications
);
// console.log(selectState,selectNotifications);
export {
  selectNotifications,
};
