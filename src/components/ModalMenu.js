import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import {useGlobalContext} from '../Context';


const ModalMenu = () => {

  const {isModalOpen} = useGlobalContext();
  const navStyle = ({isActive}) => {
    return {
      color: isActive ? 'black' : 'gray'
    }
  }
  
  
  return <>
    
    <Wrapper className={`${!isModalOpen ? 'closed':'open'}`}>
   
      <div className='info-links'>
        
          <div>
            <NavLink style={navStyle} to="/" end>
              <h4>Home</h4>
            </NavLink>       
          </div>
          <div>
            <NavLink   style={navStyle} to="/favorite">
              <h4>Preferiti</h4>
            </NavLink>
          </div>
          <div>
            <NavLink  style={navStyle} to="/contacts">
              <h4>Contatti</h4>
            </NavLink>
          </div>
          <div>
            <a href="https://francescoup.github.io/start2impact-project/" target="_blank" rel="noreferrer"><h4>Porfolio</h4></a>
          </div>
          <div>
            <a href='https://spoonacular.com/' target="_blank" rel="noreferrer"><h4>API</h4></a>
          </div>

      </div> 
 
    </Wrapper>
  </>
}

const Wrapper = styled.div`
  width:200px;
  padding:20px 20px 20px 20px;
  border-radius:10px;
  box-shadow:rgba(0, 0, 0, 0.08) 0px 1px 2px, rgba(0, 0, 0, 0.05) 0px 4px 12px;
  background:white;
  position:absolute;
  z-index:99;
  top:48px;
  right:0;
    h5{
      font-weight:300;
    }
    .info-links{
      display:flex;
      justify-content:space-evenly;
      flex-direction:column;
      gap:1rem;
      background:#fffff;
  
    }
  
  
  
  `
  


export default ModalMenu
