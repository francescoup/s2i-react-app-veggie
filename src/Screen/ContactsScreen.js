import React from 'react';
import styled from 'styled-components';
import {AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import useTitle from '../useTitle';



const ContactsScreen = () => {

  useTitle('Contattaci')
 
  return (
    <div className="container">
     
      <ContainerContact>
    
        <div className='container-text'>
          <h4>Welcome to Veggies!</h4>
          <h5>Se hai dubbi sul suo funzionamento e curiosità, contattaci tramite i nostri canali. Questo è un sito test sviluppato da Francesco Mangione.</h5>
          <div className='contact-icon'>
            <a href="https://www.linkedin.com/in/francesco-mangione-a11b98137" target="_blank" rel="noreferrer">
            <AiFillLinkedin/>
            </a>
            <a href="https://github.com/francescoup" target="_blank" rel="noreferrer">
            <AiFillGithub/>
            </a>
            <a href="https://www.instagram.com/francesco.up/" target="_blank" rel="noreferrer">
            <AiFillInstagram/>
            </a>
          </div>
        </div>
        
        <form  
          className="contact-form"
          name='contacts' 
          data-netlify='true'
          method='POST'
          >
          
          <h3>Inviaci le tue ricette</h3>
          <div className="form-group">
            <label htmlFor="nome"><p>Nome</p></label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="input"
             
              />
            <hr />
          </div>
          <div className="form-group">
            <label htmlFor="cognome"><p>Cognome</p></label>
            <input
              type="text"
              id="cognome"
              name="cognome"
              className="input"
      
              />
            <hr />
          </div>
          <div className="form-group">
            <label htmlFor="email"><p>Email</p></label>
            <input
              type="email"
              id="email"
              name="email"
              className="input"
             
              />
            <hr />
          </div>
          <div className="form-group">
            <label htmlFor="cellulare"><p>Telefono</p></label>
            <input
              type="cel"
              id="cellulare"
              name="cellulare"
              className="input"
             
              />
            <hr />
          </div>
          <div className="form-group">
            <label htmlFor="ricetta"><p>La tua ricetta</p></label>
            <textarea
              type="tel"
              id="ricetta"
              name="ricetta"
              className="input"
              
              />
            <hr />
          </div>
          <button tyep='submit' className="btn"><h4>Invia Ricetta</h4></button>
        </form>
              
      </ContainerContact>
    </div>
  )
}

const ContainerContact = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap:no-wrap;
  padding:48px 128px 160px 128px;
    h4{
      font-weight:400;
    }
    .contact-form{
      width:50%;
    }
    svg{
      font-size:40px;
    }
      h3{
        font-weight:400;
        margin-bottom:16px;
      }
    .form-group{
      display:flex;
      flex-direction:column;
      gap:0.4rem;
      margin-bottom:8px;
        .input{
          border:none ;
          outline:none;
          border-radius:0;
          max-width:500px;
          
        }
      }
      .btn{
        border:none;
        border-radius:30px;
        background:var(--orange-soft);
        box-shadow:rgba(0, 0, 0, 0.08) 0px 1px 2px, rgba(0, 0, 0, 0.05) 0px 4px 12px;
        margin-top:16px;
        padding:8px 16px 8px 16px;
        transition: 0.2s ;
        &:hover{
            transform:scale(1.1)
          }
          h4{
            color:var(--soft-light-gray);
            font-weight:400;
          }
      }
      .container-text{
        width:50%;
        padding:16px;
          h4{
            font-size:64px;
            font-weight:400;
            margin-bottom:16px;
            font-family: 'Pacifico', cursive;
            line-height:5rem;
            color: var(--extra-dark-gray);
          }
          h5{
            margin-top:32px;
            font-weight:400;
            color: var(--dark-gray);
            font-size:1rem;
          }
        .contact-icon{
          margin-top:16px;
        }
          a{
            margin-right:16px;
          }
      }
  @media screen and (max-width: 949px) {
    display:flex;
    flex-direction:column;
    .contact-form{
      width:100%;
      }
    .container-text{
      width:100%;
      padding:0;
      margin-bottom:32px;
    }
  }
  @media screen and (max-width: 549px) {
    display:flex;
    flex-direction:column;
    padding:80px 16px 160px 16px;
    .contact-form{
      width:100%;
    }
    .container-text{
      width:100%;
      padding:0;
      margin-bottom:32px;
    }
  }
         
`
export default ContactsScreen
