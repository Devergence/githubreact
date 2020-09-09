import React from 'react';
import styled from 'styled-components';

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 64px;
  height: 64px;
  transform: translate(-50%, -50%);
`;

const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background: #fff;
`;

export const LoadingSpinner = () => (
  <SpinnerWrapper>
    <Spinner>
      <div />
      <div />
      <div />
      <div />
    </Spinner>
  </SpinnerWrapper>
);