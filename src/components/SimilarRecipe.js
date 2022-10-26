import React from 'react';
import styled from 'styled-components';
import { BiTime } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const SimilarRecipe = ({id, title, imageType, sourceUrl, readyInMinutes, handleFavouritesClick, datafav }) => {
    const newTitle = title.substring(0,15);
   
  return (
    <Card>

        <Link to={`/recipe/${id}`}>
            <div className='card-images'>
                <img src={`https://spoonacular.com/recipeImages/${id}-${'556x370'}.${imageType}`} alt={title}/>
            </div>
        </Link>
        <div className='card-content'>
            
            <header>
                <h3>{newTitle}...</h3>
                <div className='icon-time'>
                <BiTime/>
                <p>{readyInMinutes}</p>
                </div> 
            </header>
            
            <div className='favorite-btn'>
                <button onClick={()=> handleFavouritesClick(datafav)}><AiFillHeart/></button>    
            </div> 

        </div>
 
    </Card>
  )
}

const Card = styled.section`
    flex: 23.5%;
    position:relative;
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
                    h3{
                        font-weight:400;
                        font-size:0.9rem
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
        .favorite-btn{
            display:flex;
            align-item:center;
            justify-content:center;
            position: absolute;
            top:0;
            right:0;
            height:44px;
            width:44px;
            z-index:56;
            
                svg{
                    font-size:1.7rem;
                    color:rgba(179, 112, 9, 0.9); 
                    cursor:pointer                  
                }
        }
        .favorite-btn > button{
            background:none;
            border:none;

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

export default SimilarRecipe
