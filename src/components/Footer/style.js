import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const List = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
height: 64px;
`

export const SLink = styled(NavLink)`
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
  transform:scale(1);
  animation: pulse 0.3s;
}
@keyframe pulse {
  
  50% {
    transform:scale(1.6);
  }
 
}
h3{
  font-size:0.7rem;
}
 
`