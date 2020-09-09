import axios from 'axios';
// 2920e79ecb69615942f50e6b434f2cc469f763c8
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
        console.log(res.data)
        dispatch(res.data)
      })
      .catch(err => new Error(err))
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