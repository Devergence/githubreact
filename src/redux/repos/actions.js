import axios from 'axios';
import types from "./types";

const BASE_URL = 'https://api.github.com';

export const getRepos = (page) => {
  return (dispatch) => {
    dispatch({
      type: types.GET_REPOS_REQUEST
    })
    axios.get(`${BASE_URL}/repositories?since=${page}`)
      .then(res => {
        dispatch({
          type: types.GET_REPOS_REQUEST_SUCCESS,
          repos: res.data
        })
      })
      .catch(err => dispatch({
        type: types.GET_REPOS_REQUEST_ERROR,
        error: err.message
      }))
  }
}

export const getAuthRepos = (page) => {
  const token = localStorage.getItem('gitToken') || '';
  return (dispatch) => {
    dispatch({
      type: types.GET_AUTH_REPOS_REQUEST
    })
    axios.get(`${BASE_URL}/user/repos?page=${page}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3.raw',
        "Authorization": "token " + token
      }
    })
      .then(res => {
        dispatch({
          type: types.GET_AUTH_REPOS_REQUEST_SUCCESS,
          authRepos: res.data
        })
      })
      .catch(err => dispatch({
        type: types.GET_AUTH_REPOS_REQUEST_ERROR,
        error: err.message
      }))
  }
}