import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Cards from '../components/Cards';
import styled from 'styled-components';
import { useGlobalContext } from '../Context';
import useTitle from '../useTitle';

const SearchedScreen = () => {

    useTitle('Search page')
    const [searchRecipe, setSearchRecipe] = useState([])
    const {addFavourite} = useGlobalContext()
    const {query} = useParams()

    const getSearch = async (query) => {

      try {
        const responseSearch = await axios.get( `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_VEGGIE_API_KEY}&number=8&query=${query}&diet=vegetarian`);
        const dataSearch = responseSearch.data.results

        const idRecipe = dataSearch.map((recipe) => recipe.id).toString()
  
        const getRecipe = await axios.get(`https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_VEGGIE_API_KEY}&ids=${idRecipe}`);
        
        setSearchRecipe(getRecipe.data)
        
      } catch (error) {
        
      }
        
    }

    useEffect(() => {
  
      getSearch(query)
    }, [query])

  return (
    <section className='container'>
      <Wrapper>
        {
        searchRecipe.map((item) => {
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
