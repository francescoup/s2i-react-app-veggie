import React from 'react';
import SearchBar from './SearchBar';
import ModalMenu from './ModalMenu';
import {HiOutlineMenuAlt1} from 'react-icons/hi';
import {FaCarrot} from 'react-icons/fa';
import styled from 'styled-components';
import { useGlobalContext } from '../Context';
import { Link } from 'react-router-dom';


const Navbar = () => {
  
  const {toggleModal} = useGlobalContext()
 
  
  return <>
  
    <nav className='nav'>
      <div className='container'>
        <header className='nav-header'>
          <Link to='/'>
            <Logo><FaCarrot/><h1 className='nav-title'>Veggies</h1></Logo>
          </Link>
          <Search><SearchBar/></Search>
          <Menu onClick={toggleModal}><HiOutlineMenuAlt1/>
          <ModalMenu/>
          </Menu>
        </header> 
      </div>
    </nav>
  </>
}

const Logo = styled.div`
  display:flex;
  align-items:center;
  gap:1rem;
  margin-top:8px;
  font-size:32px;
  color: var(--orange-soft);
    h1{
      font-size:1.5rem;
      font-family: 'Pacifico', cursive;
    
      @media screen and (max-width: 949px){
        display:none;
      }
    }
  @media screen and (max-width: 549px) {
        display:none;
    }
`
const Search = styled.div`
  display:flex;
  width:100%;
 justify-content:center;
`
const Menu = styled.div`
  position: relative;
  width:44px;
  height:44px;
  padding:6px;
  cursor:pointer;
  @media screen and (max-width: 549px) {
        display:none;
    }
    svg {
      font-size:32px;
    }
`
export default Navbar
