import React, {useRef} from "react";

const NewTodo = () => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }

    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor='text'>Todo text</label>
            <input ref={todoTextInputRef} id='text' type='text'/>
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;