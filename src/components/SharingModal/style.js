import styled from "styled-components";

export const Modal = styled.div `
  display:flex;
  align-items:center;
  justify-content:center;
`


export const Wrapper = styled.div`
  position:absolute;
  width:400px;
  height:250px;
  padding:10px;
  border-radius:10px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  box-shadow:rgba(0, 0, 0, 0.08) 0px 1px 2px, rgba(0, 0, 0, 0.05) 0px 4px 12px;
  background:white;
  z-index:99;
  transition: 0.2s;
    .modal-container{
      padding:8px;
      display:flex;
      flex-direction:column;
    }
    button{
      align-self:flex-end;
      background:none;
      border:none;
      width:48px;
      height:48px;
        svg{
          cursor:pointer;
          font-size:1.6rem;
          color:var(--orange-soft)
        }
    }
    h4, h3{
      font-weight:400;
    }
    .sharing-link{
      margin-top:16px;
      background: var(--light-gray);
      border-radius:10px;
      padding:8px;
    }
  
  `