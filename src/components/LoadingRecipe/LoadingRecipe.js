import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Wrapper } from './style.js';

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


export default LoadingRecipe
