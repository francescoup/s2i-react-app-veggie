import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Wrapper } from './style.js'

//Loading card while fetch data 

const Loading = ({cards}) => {
    return <>
    <section className='container'>

    <Wrapper>
        {Array(cards).fill(0).map((item, index) => 
        
                <article key={index} className='article'>
                    <div >
                        <Skeleton height={180}/>
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
           
        )}

    </Wrapper>
    </section>
    
    </>
}


export default Loading
