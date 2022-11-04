import styled from "styled-components";

export const Card = styled.section`
    flex: 23.5%;
    position:relative;
    max-width: 23.5%;
        .card-images{
            width:100%;
            border-radius:10px;
        }
        .card-content{
            margin-top:8px;
            margin-bottom:16px;
            header, .icon-time{
                display:flex;
                flex-direction:row;
                justify-content:space-between;
                align-items:center;
                margin-bottom:4px;
                    h3{
                        font-weight:400;
                        font-size:0.9rem
                    }
            }
        }
        img{
            width:100%;
            height:100%;
            background-size:cover;
            border-radius:10px;
            box-shadow:rgba(0, 0, 0, 0.08) 0px 1px 8px, rgba(0, 0, 0, 0.05) 0px 4px 18px;
            transition:.3s;
            &:hover{
                box-shadow:rgba(0, 0, 0, 0.2) 0px 1px 8px, rgba(0, 0, 0, 0.4) 0px 4px 18px;
            }
        }
        svg{
            margin-right:4px;
            margin-top:-2px;
            color: var(--dark-gray);
        }
        .favorite-btn{
            display:flex;
            align-item:center;
            justify-content:center;
            position: absolute;
            top:0;
            right:0;
            height:44px;
            width:44px;
            z-index:56;
            
                svg{
                    font-size:1.7rem;
                    color:rgba(179, 112, 9, 0.9); 
                    cursor:pointer                  
                }
        }
        .favorite-btn > button{
            background:none;
            border:none;

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