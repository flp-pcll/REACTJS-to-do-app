import styled from "styled-components";
import '../../reset.css';

const Button = styled.button`
    margin: .5rem 0 0 0;
    box-sizing: border-box;
    width: 30%;
    outline: none;
    border: 2px solid #cfcfcf;
    border-radius: 2px;
    padding: .5rem;
    margin-top: 1rem;
    font-size: 1.2rem;
    background-color: transparent;
    cursor: pointer;
    color: #cfcfcf;
    font-weight: 700;
    transition: all .1s ease-in;

    &:hover {background-color: #cfcfcf; color: #2e2e2e; transition: all .05s ease-in};

`
export default Button;