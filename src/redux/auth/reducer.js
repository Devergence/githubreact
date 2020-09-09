import types from './types';

const initialState = {
  user: {},
  error: null,
};

export function authReducer(state = initialState, action) {
  switch (action.type){
    case types.LOGIN_REQUEST:
      return {...state,
        user: action.user
      };
    case types.LOGIN_ERROR:
      return {...state,
        error: action.error
      };
    default:
      return state;
  }
}