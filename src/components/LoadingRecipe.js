import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

//Loading card while fetch data 

const LoadingRecipe = ({cards}) => {
    return <>
    <section className='container'>

    <Wrapper>
        
        
                <article className='article'>
                    <div >
                        <Skeleton height={280}/>
                        <div className='article-header'>
                            <div>
                                <h5><Skeleton width={150}/></h5>
                            </div>
                            <div>
                                <h5><Skeleton width={50}/></h5>
                            </div>
                        </div><h5><Skeleton count={2} width={100}/></h5>   
                    </div>   
                </article>
           
       

    </Wrapper>
    </section>
    
    </>
}

const Wrapper = styled.div`
    padding:48px 128px 160px 128px; 
    display: flex;
    justify-content; center;
    align-items:center;
    flex-wrap: wrap;
    gap: 2%;
    margin-top: 16px;
    margin-bottom:96px;
    height:100%;
    .article{
        flex:100;
        margin-bottom:16px;
            .article-header{
                display:flex;
                justify-content:space-between;
                margin-top:8px;
                margin-bottom:8px;
            }
   
    @media screen and (max-width: 1127px) {
    flex: 100%;
    max-width: 100%;
    }
    @media screen and (max-width: 949px) {
    flex: 100%;
    max-width: 100%;
    }
    @media screen and (max-width: 549px) {
        padding:0;
        flex: 100%;
        max-width: 100%;
    } 
}
    @media screen and (max-width: 1127px) {
    padding:0;
   
    }
    @media screen and (max-width: 949px) {
    padding:0;
    
    }
    @media screen and (max-width: 549px) {
        padding:0;
       
    } 
`
export default LoadingRecipe
