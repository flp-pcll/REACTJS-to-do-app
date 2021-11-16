import styled from "styled-components";

const Card = styled.div`
    ${props => props.container && 'border-radius: 10px; box-shadow: 0 .1rem .2rem .1rem rgba(25, 25, 25, .5)'};
    ${props => !props.container && 'margin: .8rem; border-radius: 5px; box-shadow: .5px .5px .1rem .09rem rgba(10, 10,10, .1) '};
    overflow: hidden;
`
export default Card;

