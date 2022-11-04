import React from 'react';
import { BiTime } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { Card } from './style.js';


const Cards = ({id, image, title, readyInMinutes, healthScore, servings,handleFavouritesClick,datafav }) => {
    const newTitle = title.substring(0,20);

  return <>
    
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
            <div className='favorite-btn'>
                <button onClick={()=> handleFavouritesClick(datafav)}><AiFillHeart/></button>    
            </div>

        </div>

    </Card>
        
    
  </>
}



export default Cards
