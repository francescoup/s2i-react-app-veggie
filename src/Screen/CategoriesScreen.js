import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import Categories from '../components/Categories/Categories';
import Cards from '../components/Cards/Cards';
import styled from 'styled-components';
import { useGlobalContext } from '../Context';
import Loading from '../components/Loading/Loading';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import useTitle from '../useTitle';
import Error from '../components/Error/Error';
import useFetch from '../useFetch';


const CategoriesScreen = () => {

  useTitle('Recipes Categories');
  const{addFavourite} = useGlobalContext();
  const location = useLocation();
  const {type} = useParams();
  const url =`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_VEGGIE_API_KEY}&number=8&cuisine=${type}&diet=vegetarian`;
  //Fetch data with useFetch custom hook
  const {data, isLoading, isError} = useFetch(url);
  //Map id from data
  const idRecipe = data?.results?.map((recipe) => recipe.id).toString();
  //Fetch full recipe details
  const urlRecipe = `https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_VEGGIE_API_KEY}&ids=${idRecipe}`
  const {data: recipes, isLoading: isLoading2, isError: isError2} = useFetch(urlRecipe)  


  if(isLoading2) {
    return <Loading cards={8}/>
  }

  if(isError2) {
    return <Error/>
  }

  return <>
  <section className='container'>

    <Categories/>
    <Wrapper>
      {
        recipes?.map((item)=> {
        return <Cards key={item.id} {...item}
          handleFavouritesClick = {addFavourite}
          datafav = {item}
        />
        })
      }
    </Wrapper>
    
  </section>
    
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
  
  
`
export default CategoriesScreen
