import React from 'react';
import { Form } from "../components/ui/Form/Form";
import styled from 'styled-components';

const StyledFormWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Login = () => {
  return (
    <StyledFormWrapper>
      <Form />
    </StyledFormWrapper>
  );
};

export default Login;
