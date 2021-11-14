import styled from "styled-components";
import '../../reset.css';

const Button = styled.button`
    border: 2px solid #FFC2FC;
    border-radius: 5px;
    padding: .5rem .8rem;
    margin: 1rem 0 0 .5rem;
    font-size: 1.1rem;
    text-transform: uppercase;
    background-color: transparent;
    cursor: pointer;
    color: #FFC2FC;
    font-weight: 600;
    transition: all .05s ease-in;
    align-self: flex-end;
    white-space: nowrap;

    @media screen and (max-width: 600px) {
        background-color: #FFC2FC;
        color: #2e2e2e;
        align-self: flex-start;
        margin: .5rem 0 0 0;
        width: 100%;
    }


    @media only screen and (hover: hover) {
        &:hover {
            background-color: #FFC2FC; color: #2e2e2e; 
            transition: all .05s ease-in;
        }
    }

`
export default Button;