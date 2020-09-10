import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  p {
    font-weight: bold;
    font-size: 26px;
  }
`

const MainPage = () => {
  return (
    <StyledMain>
      <p>Авторизация по токену с последующим редиректом на страницу с репозиториями, видимые для авторизованного пользователя</p>
      <p>Без Авторизации - список публичных репозиториев</p>
    </StyledMain>
  );
};

export default MainPage;
