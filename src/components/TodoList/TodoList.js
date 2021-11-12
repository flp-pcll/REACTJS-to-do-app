import React from "react";
import styled from "styled-components";
import TodoItem from "../TodoItem/TodoItem";

const TodoListArea = styled.div`
    width: 100%;
    background-color: rgba(47, 47, 47, .5);
    min-height: 50vh;
    margin: .5rem 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;

    & ul {
        width: 100%;
    }
`


function TodoList(props) {
    const clickedItemHandler = id => props.onClickedListItem(id);
    const itemsList = props.items.map(item => <TodoItem id={item.id} key={item.id} item={item.title} onItemClick={clickedItemHandler} />);

    return (<TodoListArea>
                <ul>
                    {itemsList}
                </ul>
            </TodoListArea>)
};

export default TodoList;