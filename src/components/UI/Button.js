import styled from "styled-components";
import '../../reset.css';

const Button = styled.button`
    box-sizing: border-box;
    outline: none;
    border: 2px solid #e2bbde;
    border-radius: 5px;
    padding: .5rem .8rem;
    margin: 1rem 0 0 .5rem;
    font-size: 1.1rem;
    text-transform: uppercase;
    background-color: transparent;
    cursor: pointer;
    color: #e2bbde;
    font-weight: 500;
    transition: all .1s ease-in;
    align-self: flex-end;
    white-space: nowrap;


    @media only screen and (hover: hover) {
        &:hover {
            background-color: #e2bbde; color: #2e2e2e; 
            transition: all .05s ease-in;
        }
    }

`
export default Button;