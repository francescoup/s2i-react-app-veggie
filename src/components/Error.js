import React from 'react';
import { FaRegSadTear} from 'react-icons/fa';
import styled from 'styled-components';

const Error = () => {
  return (
    <section className='container'>
        <Wrapper>

            <FaRegSadTear/>
            <h2>Ops...something went wrong, try again later.</h2>
 
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

export default Error
