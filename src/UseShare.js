import React, { useState } from 'react';
import { AiOutlineShareAlt} from 'react-icons/ai';
import SharingModal from './components/SharingModal/SharingModal.js';
import styled from 'styled-components';

const UseShare =  (props) => {
const [isModalOpen, setIsModalOpen]  = useState(false)

  const shareData = {
    title: props.title,
    text: 'Sharing your favorite recipe',
    url:props.url
  }

 
  const sharingDetails = async () => {

    if(navigator.share) {
      setIsModalOpen(false)
      try {
        await navigator.share(shareData)
        .then(()=> 
          console.log('works')
        );
          
        
      } catch (err) {
        console.log('dont works')
      } 
    } else {
      setIsModalOpen(true)
    }

  }

  return <>
    <Button onClick={sharingDetails}><AiOutlineShareAlt/></Button>
    <SharingModal 
    handleModal={isModalOpen}
    recipeUrl={props.url}
    handleClose={setIsModalOpen}
    />
  </>
  
}
const Button = styled.button`
background:none;
border:none;
cursor:pointer;
  svg{
    font-size:1.4rem;
  }

`
export default UseShare
