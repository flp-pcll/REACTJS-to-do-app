import styled from "styled-components";

const Card = styled.div`
    border-radius: ${props => props.listItem ? '100px' : '200px'};
    border: 1px solid transparent;
    z-index: 10000;
    overflow: hidden;
    margin: ${props => props.listItem ? '1rem' : '0'};
`

export default Card;