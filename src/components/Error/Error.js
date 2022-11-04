import React from 'react';
import { FaRegSadTear} from 'react-icons/fa';
import { Wrapper } from './style.js';

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


export default Error
