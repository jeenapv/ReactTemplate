import { fromJS } from 'immutable';
import {
  GET_ADMIN_DATA
} from './constants';

const initialFieldState = {
  value: '',
  errors: [],
};

const initialState = fromJS({
  fields: { ...initialFieldState },
});


function handleField(state, action) {
  switch (action.type) {
    case GET_ADMIN_DATA: {
      return {
        ...state,
        errors: [],
      };
    }
    default:
      return state;
  }
}

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ADMIN_DATA:
      const { field } = action;
    default:
      return state;
  }
}

export default profileReducer;
