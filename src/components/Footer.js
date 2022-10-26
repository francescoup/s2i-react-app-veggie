import React from 'react'
import styled from 'styled-components';
import { AiOutlineMessage, AiOutlineHome, AiOutlineHeart } from 'react-icons/ai'
import { useGlobalContext } from '../Context';
import { NavLink } from 'react-router-dom';

const Footer = ({sieze}) => {

  const{favourites}= useGlobalContext();

  return (
    <footer className='footer'>
     
      <div className='container footer-container'>
      <List>
       
          <SLink to={"/"} end>
            <AiOutlineHome/>
            <h4>Home</h4>
          </SLink>       
       
       
          <SLink  to={"/favorite"}>
            <AiOutlineHeart />
            <h4>Preferiti</h4>
            <div className='footer-favourites'>
              <h3>{favourites.length}</h3>
            </div>
          </SLink>
        
        
          <SLink to={"/contacts"}>
            <AiOutlineMessage/>
            <h4>Contatti</h4>
          </SLink>
        
      </List>
     
      </div> 
    </footer>
  )
}

const List = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 64px;
`

const SLink = styled(NavLink)`
  position:relative;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  cursor: pointer;
  width:50px;
  &.active{
    border-top:2px solid var(--orange-soft);
    border-bottom: 2px solid white;
  }
  
  h4 {
    font-weight:400;
    font-size: 0.8rem;
  }
  svg {
    
    font-size: 1.5rem;
  }
  .footer-favourites {
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:8px;
    left:24px;
    background:red;
    width:1rem;
    height:1rem;
    border-radius:50%;
    outline:2px solid white;
    color:white;
  }
  h3{
    font-size:0.7rem;
  }
   
`
export default Footer
