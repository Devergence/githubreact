import React from 'react';
import styled from 'styled-components';
import Login from "../../../Pages/Login";

const StyledHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 90px;
  box-shadow: 0 0 10px rgba(0,0,0,0.5); 
`
export const Header = () => {
  return (
    <StyledHeader>
      Login
    </StyledHeader>
  );
};
