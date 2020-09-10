import axios from 'axios';
import types from "./types";

export const getRepos = (page) => {
  return (dispatch) => {
    dispatch({
      type: types.GET_REPOS_REQUEST
    })
    axios.get(`https://api.github.com/repositories?since=${page}`)
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