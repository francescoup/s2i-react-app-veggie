import styled from "styled-components";

export const Logo = styled.div`
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
export const Search = styled.div`
  display:flex;
  width:100%;
 justify-content:center;
`
export const Menu = styled.div`
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