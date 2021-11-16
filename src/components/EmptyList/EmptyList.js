import React from "react";
import styled from "styled-components";
import Card from "../UI/Card";
import {ReactComponent as Illustration} from '../../assets/icons/undraw_contemplating_re_ynec.svg';

const EmptyListArea = styled.div`
    width: 100%;
    min-height: 65vh;
    background-color: rgba(47, 47, 47, .5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #cfcfcf;

    & h2 {
        font-weight: 900;
        font-size: 1.5rem;
    }

    & p {
        font-weight: 300;
        font-size: 1rem;
    }

    @media screen and (max-width: 550px) {
        & p {
            margin: 0 3rem;
        }
    }
`

const EmptyIllustration = styled.div`
    width: 100%;
    height: 150px;
    margin: .5rem 0 .5rem 0;
    opacity: 1;
`

function EmptyList() {
    return(
        <Card container={true} style={{marginTop: '.8rem'}}>
            <EmptyListArea>
                <h2>Nothing here...</h2>
                <EmptyIllustration>
                    <Illustration style={{width: '100%', height: '100%'}} title="No tasks left. Relax Yourself"/>
                </EmptyIllustration>
                <p>Add new tasks to your list using the input above.</p>
            </EmptyListArea>
        </Card>
    )
};

export default EmptyList;