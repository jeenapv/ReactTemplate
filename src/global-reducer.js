import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as notifications } from 'react-notification-system-redux';
import appReducer from './containers/App/reducer';
import loginReducer from './containers/Login/reducer';
import profileReducer from './containers/Profile/reducer';

const containersReducer = {
  containers: combineReducers({
    appReducer,
    loginReducer,
    profileReducer
    // NOTE: put other app reducers here
  }),
};

const createGlobalReducer = () => (
  combineReducers({
    ...containersReducer,
    route: routerReducer,
    login:loginReducer,
    profile:profileReducer,
    notifications,
  })
);

export default createGlobalReducer;
