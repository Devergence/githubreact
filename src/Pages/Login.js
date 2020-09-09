import React from 'react';
import { Form } from "../components/ui/Form/Form";
import styled from 'styled-components';
import {useSelector} from "react-redux";

const StyledFormWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Login = () => {
  const stateError = useSelector( state => state.auth.error);
  return (
    <StyledFormWrapper>
      <Form error={stateError}/>
    </StyledFormWrapper>
  );
};

export default Login;
