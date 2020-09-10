import React from 'react';
import styled from 'styled-components';
import { PaginationItem } from "./PaginationItem";

const PaginationWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PaginationContainer = ({first, next}) => {
  return (
    <PaginationWrapper>
      <PaginationItem counter={first}/>
      <PaginationItem counter={next}/>
    </PaginationWrapper>
  );
};
