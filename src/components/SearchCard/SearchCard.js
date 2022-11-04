import React from 'react';
import { BiTime } from 'react-icons/bi';

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



export default SearchCard
