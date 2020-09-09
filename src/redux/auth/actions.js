import axios from 'axios';
// dc5ec214025094a7add334a4190abb3af6070606
import types from "./types";

export const login = (token) => {
  const savedToken = localStorage.getItem('gitToken');
  return (dispatch) => {
    axios.get('https://api.github.com/user',{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3.raw',
        "Authorization": "token " + savedToken ? savedToken : token
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

export const getRepos = (page= 1) => {
  return (dispatch) => {
    axios.get(`https://api.github.com/repositories?since=${page}`)
      .then(res => {
        console.log(res.data)
        dispatch(res.data)
      })
      .catch(err => new Error(err))
  }
}