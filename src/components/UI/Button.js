import styled from "styled-components";
import '../../reset.css';

const Button = styled.button`
    border: 2px solid #FFC2FC;
    border-radius: 5px;
    padding: .5rem .8rem;
    margin: 0 0 0 .5rem;
    height: 46px;
    font-size: 1.1rem;
    text-transform: uppercase;
    background-color: transparent;
    cursor: pointer;
    color: #FFC2FC;
    font-weight: 600;
    transition: all .05s ease-in;
    align-self: flex-end;
    white-space: nowrap;
    box-shadow: .5px .5px .1rem .04rem rgba(10, 10, 10, .7); 

    :hover {
        background-color: #FFC2FC; color: #2e2e2e; 
        transition: all .05s ease-in;
    }
    :active {
        border-color: rgba(255, 194, 252, .5);
        background-color: rgb(255, 194, 252, .8);
    }


    @media screen and (max-width: 700px) {
        background-color: #FFC2FC;
        color: #2e2e2e;
        align-self: flex-start;
        margin: .5rem 0 0 0;
        width: 100%;
    }
`
export default Button;

/*@media screen and (max-width: 700px) {
    background-color: #FFC2FC;
    color: #2e2e2e;
    align-self: flex-start;
    margin: .5rem 0 0 0;
    width: 100%;
}*/