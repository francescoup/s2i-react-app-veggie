import styled from "styled-components";

export const Card = styled.section`
    flex: 23.5%;
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
                    h4{
                        font-weight:400;
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
        .btn{
        border:none;
        border-radius:30px;
        background:var(--orange-soft);
        box-shadow:rgba(0, 0, 0, 0.08) 0px 1px 2px, rgba(0, 0, 0, 0.05) 0px 4px 12px;
        margin-top:16px;
        padding:8px 16px 8px 16px;
        transition: 0.2s ;
        &:hover{
            transform:scale(1.1)
        }
        h4{
            color:var(--soft-light-gray);
            font-weight:400;
        }
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