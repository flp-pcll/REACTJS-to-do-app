import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styled from 'styled-components';

const Form = styled.form`
background-color: rgba(47, 47, 47, .5);
    font-size: 1.4rem;
    padding: 1.4rem 2rem;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;

    @media screen and (max-width: 700px) {
        flex-direction: column;
        text-align: center;
        padding: 1.4rem 1rem;
    }
`

const FormControls = styled.div`
& label {
    text-align: left;
    color: ${props => props.invalid && '#d32f2f'};
    color: ${props => !props.invalid && '#cfcfcf'};
    font-size: 1.1rem;
}
& input {
    width: 100%;
    font-family: inherit;
    font-weight: 400;
    color: #3e3e3e;
    font-size: 1.2rem;
    padding: .4rem;
    text-align: left;
    border-radius: 5px;
    box-shadow: .5px .5px .1rem .04rem rgba(10, 10, 10, .4); 
    border: ${props => props.invalid && '2px solid #d32f2f'};
    border: ${props => !props.invalid && '2px solid transparent'};

}
& input::placeholder {
    color: #5e5e5e;
    font-family: inherit;
    font-weight: 300;
}

@media screen and (max-width: 980px) {
        & label {
            font-size: 1rem;
        }
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
        <Card className="card" container={true}>
            <Form action="/" onSubmit={formSubmitionHandler} autoComplete="off" noValidate>
                <FormControls invalid={!isInputValid} className="form-controls">
                    <label style={{verticalAlign: 'top'}}>Insert a new task to your to-do list:</label>
                    <input id="insertTask" onChange={inputChangeHandler} onClick={clickHandler} type="text" name="Insert a new task" aria-label="New Task" />
                </FormControls>
                <Button className="button" type="submit" onClick={e => console.log('clicked')} tabIndex="0">Add Task</Button>
            </Form>
        </Card>
    )
};

export default TodoInput;