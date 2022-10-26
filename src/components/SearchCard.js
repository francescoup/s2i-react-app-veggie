import React from 'react'
import styled from 'styled-components'
import { BiTime } from 'react-icons/bi'

const SearchCard = ({id, image, title, readyInMinutes, healthScore, servings }) => {
    const newTitle = title.substring(0,20);
    console.log(newTitle)
  return (
    <Card>
        <div className='card-images'>
            <img src={image} alt={title}/>
        </div>
        <div className='card-content'>
            
            <header>
                <h4>{newTitle}...</h4>
                <div className='icon-time'>
                <BiTime/>
                <p>{readyInMinutes}</p>
                </div> 
            </header>
            <p>Health score: {healthScore}</p>
            <p>Servings for {servings}</p>  
        </div>
       
    </Card>
  )
}

const Card = styled.section`
    flex: 23.5%;
    max-width: 23.5%;
        .card-images{
            width:100%;
        }
        .card-content{
            margin-top:8px;
            margin-bottom:16px;
                header, .icon-time{
                    display:flex;
                    flex-direction:row;
                    justify-content:space-between;
                    margin-bottom:4px;
                }
        }
        img{
            width:100%;
            height:100%;
            background-size:cover;
            border-radius:10px;
        }
        svg{
            margin-right:4px;
        }
    @media screen and (max-width: 1127px) {
    flex: 32%;
    max-width: 32%;
    }
    @media screen and (max-width: 949px) {
    flex: 48%;
    max-width: 48%;
    }
    @media screen and (max-width: 549px) {
        flex: 100%;
        max-width: 100%;
    }
  
`

export default SearchCard
