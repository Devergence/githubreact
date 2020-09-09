import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getRepos} from "../redux/auth/actions";

console.log(process.env.REACT_APP_CLIENT_KEY)

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getRepos())
  },[])
  return (
    <div>
      2
    </div>
  );
};

export default MainPage;
