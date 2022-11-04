import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {BiSearch} from 'react-icons/bi';
import { Wrapper } from './style.js'


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


export default SearchBar
