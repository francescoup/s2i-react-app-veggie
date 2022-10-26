import React, { useState, useEffect} from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { AiOutlineHeart, AiOutlineArrowLeft, AiOutlineEuroCircle } from 'react-icons/ai';
import {BsFillPeopleFill} from'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import useTitle from '../useTitle';
import SimilarRecipe from '../components/SimilarRecipe';
import { useGlobalContext } from '../Context';
import UseShare from '../UseShare';
import Skeleton from 'react-loading-skeleton'; 
import 'react-loading-skeleton/dist/skeleton.css';
import Error from '../components/Error';
import LoadingRecipe from '../components/LoadingRecipe';


const RecipeScreen = () => {
  const { addFavourite } = useGlobalContext()
  const {id} = useParams()
  const [recipeDetails, setRecipeDetails] = useState({});
  const [similarRecipe, setSimilarRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate()

  // Start useSharing elemts
  const location =  useLocation()
  const prefix = location.pathname;
  console.log(prefix)
  const url = `https://s2i-react-test.netlify.app${prefix}`
  //end useSharing

  const getfullRecipe = async (id) => {
    setIsLoading(true);
    setIsError(false);
    try {

      //fetch recipes details
  
      const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_VEGGIE_API_KEY}`);
      const data = response.data;
      setRecipeDetails(data);
  
      //fetch similar recipes
    
      const similar = await axios.get(`https://api.spoonacular.com/recipes/${id}/similar?apiKey=${process.env.REACT_APP_VEGGIE_API_KEY}&limitLicence=true&number=4`);
      const dataSimilar = await similar.data;
      setSimilarRecipe(dataSimilar)
      
      
    } catch (error) {
      console.log(error)
      
      setIsError(true);
    }
    setIsLoading(false);
  }

  useEffect(()=> {
    getfullRecipe(id)
  }, [id])

  useTitle(recipeDetails.title)
  const finalPrize = (recipeDetails.pricePerServing / 100).toFixed(2)

  if(isLoading) {
    return <LoadingRecipe/>
  }

  if(isError){
    return <Error/>
  }

  return (
    <section className='container'>

      <Wrapper>
        <nav>
          <div onClick={() => navigate(-1)}>
            <AiOutlineArrowLeft style={{cursor:'pointer'}}/>
          </div>
          <h4>{recipeDetails.title}</h4>
          <div><UseShare title={recipeDetails.title} url={url}/></div>
        </nav>
        <header>
          <div className='recipe-image'>
            <img src={recipeDetails.image } alt={recipeDetails.title}/>
          </div>
          <div className='recipe-information'>
            <div className='info-icons'>
              <BiTime/>
              <h4>{recipeDetails.readyInMinutes} minutes </h4>
            </div>
            <div className='info-icons'>
              <AiOutlineEuroCircle/>
            <h4>{finalPrize || <Skeleton/>} cents</h4>
            </div>
            <div className='info-icons'>
              <BsFillPeopleFill/>
              <h4>{recipeDetails.servings} person</h4>
            </div>
            <div className='info-icons'>
              <AiOutlineHeart/>
              <h4>{recipeDetails.healthScore} point</h4>
            </div>
          </div>
        </header>
          <div className='recipe-content'>
            <div className='recipe-information'>
              <div className='recipe-summary'>
                <h4>Description</h4>
                <p dangerouslySetInnerHTML={{__html: recipeDetails.summary}}></p>
              </div>
              <div className='recipe-instructions'>
                <h4>Instructions</h4>
                <p dangerouslySetInnerHTML={{__html: recipeDetails.instructions}}></p>
              </div>
            </div>
            <div className='recipe-ingredient'>
              <h4>Ingredients</h4>
                
              {
                recipeDetails?.extendedIngredients?.map((items) =>{
                  return <li className='rounded' key={items.id}>{items.original}</li>
                })
              }
              
            </div>


          </div>
          <div className='similar'>
              <h4>Get Similar recipes</h4>

            <div className='content-similar'>
              {
                similarRecipe.map((itemSimilar)=> {
                  return <SimilarRecipe key={itemSimilar.id}
                  {...itemSimilar}
                  handleFavouritesClick={addFavourite}
                  datafav = {itemSimilar}
                  />
                })
              }
            </div>

          </div>
      </Wrapper>
      
    </section>
  )
}

const Wrapper = styled.div`
  padding:48px 128px 160px 128px;
    nav{
      display: flex;
      justify-content:space-between;
      gap:1rem;
      width:100%;
      align-items:center;
      height:48px;
      margin-bottom:8px;
        h4{
          font-size:1.3rem;
          font-weight:400;
        }
        svg{
          font-size:1.4rem;
        }
    }
    header{
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:4rem;
      svg{
        font-size:1.4rem;
      }
    @media screen and (max-width: 949px) {
        flex-direction:column;
    }
    }
    
    .info-icons{
      display:flex;
      gap:1rem;
      align-items:center;
      margin:8px;
        h4{
          font-weight:400;
          font-size:1rem;
        }
    }
    
    .recipe-image{
      flex:100%;
    }
      img{
        width:100%;
        border-radius:10px;
        box-shadow:rgba(0, 0, 0, 0.08) 0px 1px 8px, rgba(0, 0, 0, 0.05) 0px 4px 18px;
      }
    .recipe-content{
      display:flex;
      justify-content:space-evenly;
      gap:4rem;
    
      
      @media screen and (max-width: 949px) {
        flex-direction:column;
      }
      h4{
        position:relative;
        margin: 32px 0 16px  0;
        font-size:1.3rem;
        font-weight:400;
      }
      h4:after{
        content:'';
        position:absolute;
        bottom:-8px;
        left:0;
        width:6rem;
        height:2px;
        background:var(--orange-soft);
      }
    }
    .recipe-information{
      flex:60%;        
    }
      p{
        font-weight:300;
        line-height:2;
      }
    .recipe-ingredient{
      flex: 32%;
    } 
      .rounded{
        list-style-type: circle;
        line-height:2;
        color:#d09221;
      }
    @media screen and (max-width: 949px) {
      flex:100% }
    .similar{
      h4{
        position:relative;
        margin: 32px 0 16px  0;
        font-size:1.3rem;
        font-weight:400;
      }
      h4:after{
        content:'';
        position:absolute;
        bottom:-8px;
        left:0;
        width:6rem;
        height:2px;
        background:var(--orange-soft);
      }
    }
    .content-similar{
      display:flex;
      justify-content:space-between;
      gap:1rem;
      
     
      @media screen and (max-width: 949px) {
        width:100%;
        flex-direction:column;
        margin-bottom:64px;
    
    }
    }
  @media screen and (max-width: 949px) {
      padding:10px;
  }     
`
export default RecipeScreen
