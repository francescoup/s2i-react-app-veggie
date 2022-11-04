import styled from "styled-components";

export const Card = styled.section`
    flex: 23.5%;
    max-width: 23.5%;
        .card-images{
            width:100%;
        }
        .card-content{
            margin-top:8px;
            margin-bottom:16px;
                header, .icon-time{
                    display:flex;
                    flex-direction:row;
                    justify-content:space-between;
                    margin-bottom:4px;
                }
        }
        img{
            width:100%;
            height:100%;
            background-size:cover;
            border-radius:10px;
        }
        svg{
            margin-right:4px;
        }
    @media screen and (max-width: 1127px) {
    flex: 32%;
    max-width: 32%;
    }
    @media screen and (max-width: 949px) {
    flex: 48%;
    max-width: 48%;
    }
    @media screen and (max-width: 549px) {
        flex: 100%;
        max-width: 100%;
    }
  
`