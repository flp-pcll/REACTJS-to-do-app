import React, { useState } from "react";
import Button from "../UI/Button";
import styled from 'styled-components';

const Form = styled.form`
background-color: rgba(47, 47, 47, .5);
border-radius: 10px;
    font-size: 1.4rem;
    padding: 1.4rem;
`

const FormControls = styled.div`
& label {
    display: block;
    color: ${props => props.invalid && '#d32f2f'};
    color: ${props => !props.invalid && '#cfcfcf'};
    margin-top: .5rem;
    font-size: 1.2rem;
}
& input {
    width: 60%;
    font-family: inherit;
    margin-top: .5rem;
    font-weight: 400;
    color: #3e3e3e;
    font-size: 1.2rem;
    padding: .5rem;
    text-align: center;
    border-radius: 5px;
    outline: ${props => props.invalid && '2px solid #d32f2f'}
}
& input::placeholder {
    color: #5e5e5e;
    font-family: inherit;
    font-weight: 300;
}
`

function TodoInput(props) {
    const [newTask, setNewTask] = useState({ title: '', id: '' });
    const [isInputValid, setIsInputValid] = useState(true);

    const inputChangeHandler = event => {
        setNewTask({ title: event.target.value, id: Math.floor(Math.random() * 1582) });
    };

    const clickHandler = event => {
        setIsInputValid(true);
    };

    const formSubmitionHandler = event => {
        event.preventDefault();
        if (newTask.title.trim().length === 0) {
            setIsInputValid(false);
            return;
        }
        props.onTaskSubmition(newTask);
    };

    return (
        <Form action="/" className="todo__insert-task" onSubmit={formSubmitionHandler} autoComplete="off" noValidate>
            <FormControls invalid={!isInputValid} className="form-controls">
                <label aria-hidden="true">Insert a new task to your to-do list</label>
                <input id="insertTask" onChange={inputChangeHandler} onClick={clickHandler} type="text" name="Insert a new task" aria-label="New Task" />
            </FormControls>
            <div role="complementary" className="form-actions">
                <Button onClick={e => console.log('clicked')} tabIndex="0">Add Task</Button>
            </div>
        </Form>
    )
};

export default TodoInput;