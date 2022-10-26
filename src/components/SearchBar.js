import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {BiSearch} from 'react-icons/bi';
import styled from 'styled-components';

const SearchBar = () => {

  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();
    input && navigate('../searched/' + input);
    setInput('')
  }

  return (
    <Wrapper onSubmit={formSubmit}>
      <input
      value={input}
      onChange={(e)=> setInput(e.target.value)}
      placeholder='Search your favorite meal...'
      />
      <button className="btn" type='submit'>
        <BiSearch className="icon" />
      </button>
    </Wrapper>
  )
}

const Wrapper =  styled.form`
  width: 100%;
  height:56px;
  position:relative;
  max-width: 420px;
  
    input{
      width:100%;
      max-width:420px;
      height: 56px;
      padding:4px 24px 4px 24px;
      border-radius: 40px;
      border:1px solid #ccc;
      outline:none;
      box-shadow:rgba(0, 0, 0, 0.08) 0px 1px 2px, rgba(0, 0, 0, 0.05) 0px 4px 12px;
    }

    button {
      position:absolute;
      top:0;
      right:0;
      height:48px;
      width:48px;
      border:none;
      background: #E07912;
      border-radius:50%;
      transform: translate(-8%, 8%);
      cursor:pointer;
    }
    
      svg{
        color:white;
        font-size:1.3rem;
      }

`
export default SearchBar
