import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Cards from '../components/Cards/Cards';
import styled from 'styled-components';
import { useGlobalContext } from '../Context';
import useTitle from '../useTitle';
import useFetch from '../useFetch';

const SearchedScreen = () => {

  useTitle('Search page')
  const {addFavourite} = useGlobalContext();
  const {query} = useParams();

  const url =`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_VEGGIE_API_KEY}&number=8&query=${query}&diet=vegetarian`;
  //Fetch data with useFetch custom hook
  const {data, isLoading, isError} = useFetch(url);
  //Map id from data
  const idRecipe = data?.results?.map((recipe) => recipe.id).toString();
  //Fetch full recipe details
  const urlRecipe = `https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_VEGGIE_API_KEY}&ids=${idRecipe}`
  const {data: recipes, isLoading: isLoading2, isError: isError2} = useFetch(urlRecipe)  

  
  return (
    <section className='container'>
      <Wrapper>
        {
        recipes.map((item) => {
        return <Cards key={item.id} {...item}
        handleFavouritesClick = {addFavourite}
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
export default SearchedScreen
