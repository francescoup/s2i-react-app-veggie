import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from '../components/Cards.js';
import styled from 'styled-components';
import Categories from '../components/Categories.js';
import { useGlobalContext } from '../Context.js';
import useTitle from '../useTitle.js';
import Loading from '../components/Loading.js';
import Error from '../components/Error.js';

const HomeScreen = () => {

  useTitle('Home page')
  const{addFavourite}= useGlobalContext()
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  
  
  const url =  `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_VEGGIE_API_KEY}&tags=vegetarian&number=8`

  const getRecipes = async () => {

    setIsLoading(true);
    setIsError(false)
    try {
      const getData = localStorage.getItem('recipes');
      if(getData) {
        setRecipes(JSON.parse(getData))
      } else {
        const response = await axios.get(url);
        const data = await response.data;
        localStorage.setItem('recipes', JSON.stringify(data.recipes))
        setRecipes(data.recipes)
         
      }
      
    } catch (error) {
      setIsError(true);
      setIsLoading(false)
    }
  setIsLoading(false)
  } 

  useEffect(()=> {
    getRecipes()
  }, [])
  
  if(isLoading){
    return <Loading cards={8}/>
  }

  if(isError) {
    return <Error/>
  }

  return (
    <section className='container'>
      
      <Categories/>
      <Wrapper>
  
        {
        recipes.map((item) => {
        
        return <Cards key={item.id} {...item}
        
        handleFavouritesClick={addFavourite}
        datafav = {item}
        />

        })
        }
      </Wrapper>
     
    </section>
  )
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
   
`

export default HomeScreen
