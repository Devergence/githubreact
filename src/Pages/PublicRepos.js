import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../redux/repos/actions";
import { RepoList } from "../components/ui/RepoList/RepoList";
import {PaginationContainer} from "../components/ui/Pagination/PaginationContainer";
import {LoadingSpinner} from "../components/ui/LoadingSpinner/LoadingSpinner";

const PublicRepos = () => {
  const [start, setPage] = useState('1');
  const dispatch = useDispatch();
  const reposSelector = useSelector(state => state.repos.repos);
  const reposLoading = useSelector(state => state.repos.isLoading);

  const getFirstPage = () => {
    let firstPage = reposSelector[0];
    return firstPage && firstPage.id;
  }

  const getLatestPage = () => {
    let lastItem = reposSelector[reposSelector.length -1];
    return lastItem && lastItem.id;
  }

  useEffect(()=>{
    dispatch(getRepos(start))
  }, [dispatch, start]);

  return (
    <>
      {reposLoading && <LoadingSpinner />}
      <RepoList list={reposSelector}/>
      <PaginationContainer setPage={setPage} first={getFirstPage()} next={getLatestPage()}/>
    </>
  );
};

export default PublicRepos;
