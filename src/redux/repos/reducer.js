import types from './types';

const initialState = {
  authRepos: [],
  repos: [],
  isLoading: false,
};

export const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_REPOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_REPOS_REQUEST_SUCCESS:
      return {
        ...state,
        repos: action.repos,
        isLoading: false,
      };
    case types.GET_REPOS_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
}