import React from 'react';
import styled from 'styled-components';
import { FaRegSadTear } from 'react-icons/fa';
import useTitle from '../useTitle';

const ErrorPage = () => {

  useTitle('Error page')

  return (
    <section className='container'>
    <Wrapper>

        <FaRegSadTear/>
        <h2>Nothing to see here, back to home.</h2>

    </Wrapper>
    </section>
  )
}
const Wrapper = styled.div`
width:100%;
display: flex;
align-items:center;
justify-content:center;
flex-direction:column;
margin-top:48px;
  h2{
    font-family: 'Pacifico', cursive;
    color: var(--extra-dark-gray);
  } 
  svg{
    color:var(--orange-soft);
    font-size:4rem;
  } 


`
export default ErrorPage
