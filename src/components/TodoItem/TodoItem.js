import React from "react";
import styled from "styled-components";
import Card from "../UI/Card";

const ListItem = styled.li`
    display: block;
    max-width: 100%;
    padding: .25rem;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 600;
    border-radius: 5px;
    background-color: rgba(60, 60, 60, 1);
    transition: .1s background-color ease-out;

    @media only screen and (hover: hover) {
        &:hover {
                background-color: rgba(80, 80, 80, 1);
                transition: .1s background-color ease-in;
            }
        }
    }
`

function TodoItem(props) {

    const deleteItemHandler = event => {
        props.onItemClick(props.id);
    }


    return (
    <Card className="item_teste" container={false} listItem={true}>
        <ListItem id={props.id} onClick={deleteItemHandler}>
            <div>{props.item}</div>
        </ListItem>
    </Card>);
};

export default TodoItem;