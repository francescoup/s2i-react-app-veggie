import styled from "styled-components";

export const Wrapper =  styled.form`
    width: 100%;
    height:56px;
    position:relative;
    max-width: 420px;

        input{
            width:100%;
            max-width:420px;
            height: 56px;
            padding:4px 24px 4px 24px;
            border-radius: 40px;
            border:1px solid #ccc;
            outline:none;
            transition:.3s;
            box-shadow:rgba(0, 0, 0, 0.08) 0px 1px 2px, rgba(0, 0, 0, 0.05) 0px 4px 12px;
            &:focus{
                box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 8px, rgba(0, 0, 0, 0.1) 0px 4px 18px;
            }
        }

        button {
            position:absolute;
            top:0;
            right:0;
            height:48px;
            width:48px;
            border:none;
            background: #E07912;
            border-radius:50%;
            transform: translate(-8%, 8%);
            cursor:pointer;
        }
        
            svg{
            color:white;
            font-size:1.3rem;
            }

`