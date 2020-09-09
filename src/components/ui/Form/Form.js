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

const StyledError = styled.p`
  color: red;
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
  :disabled {
    cursor: not-allowed;
  }
`

export const Form = ({error}) => {
  const [token, setToken] = useState('');
  const [disable, setDisabled] = useState(true);
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    const {value} = e.target;
    if(value.length >= 16){
      setDisabled(false);
    }
    setToken(value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setDisabled(false);
    if(token.length < 16 || token.match(/^[ ]+$/)){
      setDisabled(true);
      return;
    }
    dispatch(login(token.trim()));
    setToken('');
  }

  return (
    <StyledForm onSubmit={submitHandler}>
      <StyledInput>
        <input type="text" onChange={inputHandler} value={token} placeholder='enter your github token'/>
        {error && <StyledError>{error}</StyledError>}
      </StyledInput>
      <StyledButton disabled={disable}>Sign-In</StyledButton>
    </StyledForm>
  );
};
