import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const List = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap:nowrap;
  overflow-x: auto;
  margin: 1rem 0;
`

export const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 4rem;
  height: 3rem;
  color:var(--dark-gray);
  transition:.3s;
  &:hover{
    color:black;
  }
  
  cursor: pointer;
  transform: scale(0.8);
  h4 {
    font-weight:400;
    font-size: 1rem;
  }
  svg {
    
    font-size: 1.5rem;
  
  }
  &.active {
    color:black;
    border-bottom:2px solid var(--orange-soft);
    svg {
      color: #gray;
    }
    h4 {
      color: gray;
    }
  }
`