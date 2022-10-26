import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import Categories from '../components/Categories';
import Cards from '../components/Cards';
import styled from 'styled-components';
import { useGlobalContext } from '../Context';
import Loading from '../components/Loading';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import useTitle from '../useTitle';
import Error from '../components/Error';


const CategoriesScreen = () => {

  useTitle('Recipes Categories');
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const{addFavourite} =useGlobalContext()
  const {type} = useParams();
  const location = useLocation()


  const getCategories = async (type) => {

    setIsLoading(true);
    setIsError(false)

    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_VEGGIE_API_KEY}&number=8&cuisine=${type}&diet=vegetarian`)
      const data = await response.data.results

      const idRecipe = data.map((recipe) => recipe.id).toString()
  
      const getRecipe = await axios.get(`https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_VEGGIE_API_KEY}&ids=${idRecipe}`);
      setCategories(getRecipe.data);
      setIsLoading(false)
     
    } catch (error) {
      setIsError(true)
    }
    setIsLoading(false)
  }

  useEffect(()=> {
    getCategories(type)
  }, [type])

  if(isLoading) {
    return <Loading cards={8}/>
  }

  if(isError) {
    return <Error/>
  }


  return <>
  <section className='container'>

    <Categories/>
    <Wrapper>
      {
        categories.map((item)=> {
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
