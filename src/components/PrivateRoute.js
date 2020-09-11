import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({isAuth, component:Component, ...rest}) => {
  const isSaved = localStorage.getItem('gitToken');

  return (
    <Route {...rest} component={(props) => (isSaved ? (<Component {...props}/>) : (<Redirect to='/login'/>))}/>
  );
};
