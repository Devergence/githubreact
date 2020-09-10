import React from 'react';
import styled from 'styled-components';

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
  
  :first-child {
    margin-right: 20px;
  }
`

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLinks>Авторизация</StyledLinks>
      <StyledLinks>Без авторизации</StyledLinks>
    </StyledHeader>
  );
};
