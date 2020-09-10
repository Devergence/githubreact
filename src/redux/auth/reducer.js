import types from './types';

const initialState = {
  isAuth: false,
  user: {},
  error: null,
};

export function authReducer(state = initialState, action) {
  switch (action.type){
    case types.LOGIN_REQUEST:
      return {...state,
        user: action.user,
        isAuth: true,
      };
    case types.LOGIN_ERROR:
      return {...state,
        error: action.error
      };
    case types.LOGOUT:
      return {...state,
        isAuth: false,
        user: {},
      };
    default:
      return state;
  }
}