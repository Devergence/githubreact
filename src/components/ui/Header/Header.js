import React from 'react';
import styled from 'styled-components';
import { useHistory, useRouteMatch  } from "react-router-dom";
import {useSelector} from "react-redux";

const StyledHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 90px;
  padding: 40px;
  box-shadow: 0 0 10px rgba(0,0,0,0.5); 
`

const StyledLinks = styled.div`
  background: brown;
  width: 200px;
  text-align: center;
  padding: 10px 0;
  font-weight: bold;
  color: white; 
  cursor: pointer;
  transition: background-color .4s ease-in;
  
  :hover {
    background: #853333;
  }
  
  :not(:last-child) {
    margin-right: 20px;
  }
`

const Header = () => {
  let history = useHistory();
  let match = useRouteMatch("/public");
  let userSelector = useSelector(state => state.auth.user.login)

  return (
    <StyledHeader>
      <StyledLinks onClick={()=>history.push("/login")}>{ userSelector || 'Авторизация' }</StyledLinks>
      {
        match
          ? <StyledLinks onClick={()=>history.push("/")}>На Главную</StyledLinks>
          : <StyledLinks onClick={()=>history.push("/public")}>Без авторизации</StyledLinks>
      }
    </StyledHeader>
  );
};

export default Header;
