import React from 'react';
import { BiTime } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Card } from './style.js'


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


export default SimilarRecipe
