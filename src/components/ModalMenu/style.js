import styled from "styled-components";

export const Wrapper = styled.div`
    width:200px;
    padding:20px 20px 20px 20px;
    border-radius:10px;
    box-shadow:rgba(0, 0, 0, 0.08) 0px 1px 2px, rgba(0, 0, 0, 0.05) 0px 4px 12px;
    background:white;
    position:absolute;
    z-index:99;
    top:48px;
    right:0;
    h4{
        font-weight:400;
        transition:.3s;
    }
    .info-links{
        display:flex;
        justify-content:space-evenly;
        flex-direction:column;
        gap:1rem;
        background:#fffff;
        h4:hover{
            margin-left:5px;
        }

    }

`