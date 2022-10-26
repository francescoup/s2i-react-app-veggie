import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { BiTime } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const FavCards = ({id, image, title, readyInMinutes, healthScore, servings,handleFavouritesClick,datafav }) => {
 
    const newTitle = title.substring(0,20);

  return (
    <Card>
        <Link to={`/recipe/${id}`}>
        <div className='card-images'>
            <img src={image} alt={title}/>
        </div>
        </Link>
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
            <button className='btn' onClick={()=> handleFavouritesClick(datafav)}><h4>Remove</h4></button>
        </div>
        
    </Card>
  )
}

const Card = styled.section`
    flex: 23.5%;
    max-width: 23.5%;
        .card-images{
            width:100%;
            border-radius:10px;
        }
        .card-content{
            margin-top:8px;
            margin-bottom:16px;
            header, .icon-time{
                display:flex;
                flex-direction:row;
                justify-content:space-between;
                align-items:center;
                margin-bottom:4px;
                    h4{
                        font-weight:400;
                    }
            }
        }
        img{
            width:100%;
            height:100%;
            background-size:cover;
            border-radius:10px;
            box-shadow:rgba(0, 0, 0, 0.08) 0px 1px 8px, rgba(0, 0, 0, 0.05) 0px 4px 18px;
        }
        svg{
            margin-right:4px;
            margin-top:-2px;
            color: var(--dark-gray);
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
            font-wight:400;
          }
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

export default FavCards
