import React from 'react';
import { useSelector } from "react-redux";
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({isAuth, component:Component, ...rest}) => {
  const isLogged = useSelector(state => state.auth.isAuth);
  return (
    <Route {...rest} component={(props) => (isLogged ? (<Component {...props}/>): (<Redirect to='/'/>))}/>
  );
};
