import styled from "styled-components";

export const Wrapper = styled.div`
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