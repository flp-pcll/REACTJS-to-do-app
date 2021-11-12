import React, { useState } from "react";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import EmptyList from "./components/EmptyList/EmptyList";
import styled from "styled-components";

import './App.css';

const Main = styled.main`
    min-width: 60%;
    text-align: center;
    margin: 2rem 5rem;
`

function App() {
    const [taskList, setTaskList] = useState([]);

    const addTaskHandler = task => {
        setTaskList(prevList => {
            const updatedList = [...prevList];
            updatedList.unshift(task);
            return updatedList;
        });
    };

    const deleteTaskHandler = taskId => {
        console.log(taskId);
        const updatedList = taskList.filter(listItem => listItem.id !== taskId);

        setTaskList(updatedList);
    };

    return (
        <Main title="To-do List App">
            <TodoInput onTaskSubmition={addTaskHandler} />
            {taskList.length <= 0 && <EmptyList />}
            {taskList.length > 0 && <TodoList onClickedListItem={deleteTaskHandler} items={taskList} />}
        </Main>
    )
};

export default App;