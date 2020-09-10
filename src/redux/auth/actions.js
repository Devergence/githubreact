import axios from 'axios';
import types from "./types";

export const login = (token) => {
  return (dispatch) => {
    axios.get('https://api.github.com/user',{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3.raw',
        "Authorization": "token " + token
      }
    })
      .then(res => {
        localStorage.setItem('gitToken', token);
        dispatch({
          type: types.LOGIN_REQUEST,
          user: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: types.LOGIN_ERROR,
          error: err.message
        })
      })
  }
}

export const logout = (dispatch) => {
  return dispatch => {
    dispatch({
      type: types.LOGOUT,
    })
  }
}
