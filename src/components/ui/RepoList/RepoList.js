import React from 'react';
import { RepoCard } from "../RepoCard/RepoCard";
import styled from 'styled-components';

const ListWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 60px;
`

export const RepoList = ({list}) => {
  return (
    <ListWrapper>
      {list && list.map(el => <RepoCard key={el.id} data={el}/>)}
    </ListWrapper>
  )
};
