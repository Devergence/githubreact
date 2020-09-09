import types from './types';

const initialState = {
  user: '',
  token: '',
  loginError: '',
};

export function authReducer(state = initialState, action) {
  switch (action.type){
    case types.LOGIN_REQUEST:
      return {...state,
        loginError: action.loginError,
        user: action.user
      };
    case types.SET_USER_TOKEN:
      return { ...state, token: action.token };
    case types.CLEAR_USER_TOKEN:
      return { ...state, token: '' };
    default:
      return state;
  }
}