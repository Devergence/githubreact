import React from 'react';
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import {getRepos} from "../../../redux/repos/actions";

const PaginationItemStyle = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid brown;
  cursor: pointer;
  
  :last-child {
    margin-left: 20px;
  }
`

export const PaginationItem = ({counter}) => {
  const dispatch = useDispatch();

  const pageHandler = () =>{
    dispatch(getRepos(counter))
    window.scrollTo(0, 0);
  }

  return (
    <PaginationItemStyle onClick={pageHandler}>
      {counter}
    </PaginationItemStyle>
  );
};
