import { NavLink } from 'react-router-dom';
import {useGlobalContext} from '../../Context';
import { Wrapper } from './style.js';


const ModalMenu = () => {

  const {isModalOpen} = useGlobalContext();
  const navStyle = ({isActive}) => {
    return {
      color: isActive ? 'black' : 'gray'
    }
  }
  
  
  return (
    
    <Wrapper className={`${!isModalOpen ? 'closed':'open'}`}>
   
      <div className='info-links'>
        
          <div>
            <NavLink style={navStyle} to="/" end>
              <h4>Home</h4>
            </NavLink>       
          </div>
          <div>
            <NavLink style={navStyle} to="/favorite">
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
  )
}


  


export default ModalMenu
