import React from 'react'
import { AiOutlineMessage, AiOutlineHome, AiOutlineHeart } from 'react-icons/ai'
import { useGlobalContext } from '../../Context';
import { NavLink } from 'react-router-dom';
import { SLink, List } from './style.js' 

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
            { favourites.length > 0 && <div className='footer-favourites'>
              <h3>{favourites.length}</h3>
            </div>}
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


export default Footer
