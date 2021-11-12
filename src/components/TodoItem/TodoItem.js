import React from "react";
import styled from "styled-components";
import Card from "../UI/Card";

const ListItem = styled.li`
    display: block;
    max-width: 100%;
    margin: 1rem;
    padding: .25rem;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 600;
    border-radius: 5px;
    background-color: rgba(60, 60, 60, 1);
    transition: .1s background-color ease-out;


    &:hover {
        background-color: rgba(80, 80, 80, 1);
        transition: .1s background-color ease-in;
    }
`

function TodoItem(props) {

    const deleteItemHandler = event => {
        props.onItemClick(props.id);
    }


    return (<ListItem className="todo-list__item"
        id={props.id}
        onClick={deleteItemHandler}>
        <div>{props.item}</div>
    </ListItem>);
};

export default TodoItem;