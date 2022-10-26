import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

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

const Wrapper = styled.div`
    display: flex;
    justify-content; flex-start;
    align-items:center;
    flex-wrap: wrap;
    gap: 2%;
    margin-top: 16px;
    margin-bottom:96px;
    height:100%;
    .article{
        flex:23.5%;
        margin-bottom:16px;
            .article-header{
                display:flex;
                justify-content:space-between;
                margin-top:8px;
                margin-bottom:8px;
            }
   
    @media screen and (max-width: 1127px) {
    flex: 31%;
    max-width: 32%;
    }
    @media screen and (max-width: 949px) {
    flex: 47%;
    max-width: 48%;
    }
    @media screen and (max-width: 549px) {
        flex: 100%;
        max-width: 100%;
    } 
}

`
export default Loading
