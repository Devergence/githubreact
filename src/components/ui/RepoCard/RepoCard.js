import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 40px;
  cursor: pointer;
  transition: all .3s;
  
  :last-child {
    margin-bottom: 0;
  }
  
  :hover {
    box-shadow: 0 0 10px rgba(0,0,0,0.5); 
  }
  
  .card__id {
    font-weight: bold;
    width: 100px;
  }
  
  .card__name {
    margin-left: 10px;
    width: 300px;
  }
  
  .card__description {
    width: 100%;
    margin-left: 20px;
  }
`

export const RepoCard = ({data}) => {
  return (
    <StyledCard>
      <div className='card__id'>
        {data.id}
      </div>
      <div className='card__name'>
        {data.owner.login}
      </div>
      <div className='card__description'>
        {data.description}
      </div>
    </StyledCard>
  );
};
