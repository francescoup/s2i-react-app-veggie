import React from 'react';
import FavCards from '../components/FavCards/FavCards.js';
import styled from 'styled-components';
import { useGlobalContext } from '../Context';
import useTitle from '../useTitle';

const FavoriteScreen = () => {

  useTitle('Your favorites recipes');
  const {addFavourite, removeFavourite,  favourites} = useGlobalContext();
  
  return <><div className='container'>
   
    <Wrapper>

      { favourites.length === 0 ? <div className='error-message'><h2>You haven't added any recipes to your favorites yet...</h2></div> :
      favourites.map((el)=> {
        return <FavCards key={el.id} {...el}
        handleFavouritesClick={removeFavourite}
        datafav = {el}
        />
      })
    }
    
    </Wrapper>
    
  </div>
      </>
  
  
}

const Wrapper = styled.div`
  display: flex;
  justify-content; flex-start;
  align-items:center;
  flex-wrap: wrap;
  gap: 2%;
  margin-top: 16px;
  margin-bottom:96px;
  height:100%;
  .error-message{
    width:100%;
    display: flex;
    align-items:center;
    justify-content:center;
    margin-top:48px;
      h2{
        font-family: 'Pacifico', cursive;
        color: var(--extra-dark-gray);
    
      }  
  }
   
`
export default FavoriteScreen
