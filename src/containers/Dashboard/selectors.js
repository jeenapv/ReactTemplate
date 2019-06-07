export const selectDashContainer = (state) => state.containers.dashReducer;

// Need to use .get, beucase reducer defaulState was created by using ImmutableJS
export const selectApiData = (state) => selectDashContainer(state).get('apiData');
