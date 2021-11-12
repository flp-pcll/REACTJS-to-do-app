import React from "react";
import styled from "styled-components";
import EmptyListIllustration from '../../assets/icons/undraw_contemplating_re_ynec.svg';

const EmptyListArea = styled.div`
    width: 100%;
    min-height: 50vh;
    background-color: rgba(47, 47, 47, .5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: .5rem 0 0 0;
    border-radius: 10px;
    color: #cfcfcf;

    & h2 {
        font-weight: 900;
        font-size: 1.5rem;
    }

    & p {
        font-weight: 300;
        font-size: 1rem;
    }
`

const EmptyIllustration = styled.img`
    width: 100%;
    height: 150px;
    margin: .5rem 0 .5rem 0;
    opacity: .8;
`

function EmptyList() {
    return(
        <EmptyListArea>
            <h2>Nothing here...</h2>
            <EmptyIllustration src={EmptyListIllustration} alt="a girl listening to music"/>
            <p>Add new tasks to your list using the input above.</p>
        </EmptyListArea>
    )
};

export default EmptyList;