import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from '../components/Cards/Cards.js';
import styled from 'styled-components';
import Categories from '../components/Categories/Categories.js';
import { useGlobalContext } from '../Context.js';
import useTitle from '../useTitle.js';
import Loading from '../components/Loading/Loading.js';
import Error from '../components/Error/Error.js';
import useFetch from '../useFetch.js';
const url =  `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_VEGGIE_API_KEY}&tags=vegetarian&number=8`
const HomeScreen = () => {

  useTitle('Home page')
  const{addFavourite}= useGlobalContext()
  //Fetch data with useFetch hook
  const {data, isLoading,isError} = useFetch(url)
  
  
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
        data.recipes.map((item) => {
        
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
