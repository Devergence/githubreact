import React from 'react';
import styled from 'styled-components';

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 64px;
  height: 64px;
  transform: translate(-50%, -50%);
  z-index: 999;
  
  div {
    position: absolute;
    display: block;
    box-sizing: border-box;
    width: 51px;
    height: 51px;
    margin: 6px;
    border: 4px solid;
    border-color: #619f42 transparent transparent transparent;
    border-radius: 50%;
    animation: loading-spinner-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    
    :nth-child(1) {
      animation-delay: -0.45s;
    }
    :nth-child(2) {
      animation-delay: -0.3s;
    }
    :nth-child(3) {
      animation-delay: -0.15s;
    }
  }
  
    @keyframes loading-spinner-ring {
    0% {
      transform: rotate(0deg);
    }
  
    100% {
      transform: rotate(360deg);
    }
  }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 120px);
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