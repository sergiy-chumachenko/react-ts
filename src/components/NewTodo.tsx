import React, {useContext, useRef} from "react";
import classes from './NewTodo.module.css';
import {TodosContext} from "../store/todos-context";

const NewTodo: React.FC = () => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const todosCtx = useContext(TodosContext);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }
        todosCtx.addTodo(enteredText);
        todoTextInputRef.current!.value = '';
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <label htmlFor='text'>Todo text</label>
            <input ref={todoTextInputRef} id='text' type='text'/>
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;