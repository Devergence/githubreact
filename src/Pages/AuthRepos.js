import React, {useEffect} from 'react';
import {LoadingSpinner} from "../components/ui/LoadingSpinner/LoadingSpinner";
import {RepoList} from "../components/ui/RepoList/RepoList";
import {getAuthRepos} from "../redux/repos/actions";
import {useDispatch, useSelector} from "react-redux";

const AuthRepos = () => {
  const dispatch = useDispatch();
  const authReposSelector = useSelector(state => state.repos.authRepos);
  const reposLoading = useSelector(state => state.repos.isLoading);

  useEffect(()=>{
    dispatch(getAuthRepos(1))
  }, [dispatch]);

  return (
    <>
      {reposLoading && <LoadingSpinner />}
      <RepoList list={authReposSelector}/>
    </>
  );
};

export default AuthRepos;
