import React from 'react';
// import styled from 'styled-components';
import SearchIcon from './SearchIcon';

const InputContainer = styled.div`
  display: inline-block;
  box-sizing: border-box;
  height: calc(100% - 40px);
  width: calc(100% - 257px);
  vertical-align: middle;
  margin: 20px;
  border-bottom: 1px solid #d0d2d3;
  
  > input {
    height: 40px;
    width: calc(90% - 26px);
    margin-left: 10px;
    font: 17px/20px 'Calibre-Regular', sans-serif;
    background-color: transparent;
    border: none;
    color: #656666;
  }

`;

export default function Input(props) {
  const { handleChange, handleSubmit, handleKeyPress } = props;
  return (
    <InputContainer>
      <SearchIcon handleSubmit={handleSubmit} />
      <input placeholder="Find a great place near you" onChange={handleChange} onKeyDown={handleKeyPress}></input>
    </InputContainer>
  );
};