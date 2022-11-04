import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import ModalMenu from '../ModalMenu/ModalMenu.js';
import {HiOutlineMenuAlt1} from 'react-icons/hi';
import {FaCarrot} from 'react-icons/fa';
import { useGlobalContext } from '../../Context';
import { Link } from 'react-router-dom';
import { Logo, Menu, Search} from './style.js'


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


export default Navbar
