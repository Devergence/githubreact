import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {login} from "../../../redux/auth/actions";
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  background-color: #444;
  border-radius: 3px;
  padding: 40px;
`

const StyledInput = styled.div`
  width: 100%;
  
  input {
    width: 100%;
    height: 30px;
    border: none;
    padding-left: 15px;
  }
`

const StyledButton = styled.button`
  width: 200px;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  height: 40px;
  margin-top: 20px;
  
  :hover {
    background-color: #f1f8ff;
  }
`

export const Form = () => {
  const [token, setToken] = useState('');
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    const {value} = e.target;
    if(value.length < 1) return;
    setToken(value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(token));
    setToken('');
  }

  return (
    <StyledForm onSubmit={submitHandler}>
      <StyledInput>
        <input type="text" onChange={inputHandler} value={token} placeholder='enter your github token'/>
      </StyledInput>
      <StyledButton>Sign-In</StyledButton>
    </StyledForm>
  );
};
