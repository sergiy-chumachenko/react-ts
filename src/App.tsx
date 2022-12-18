import Todos from "./components/Todos";
import './App.css';
import NewTodo from "./components/NewTodo";
import Todo from "./models/todo";
import {Fragment, useState} from "react";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);
        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        })
    };
    const removeTodoHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== todoId);
        })
    };

    return (
        <Fragment>
            <NewTodo onAddTodo={addTodoHandler}/>
            <Todos onRemoveTodo={removeTodoHandler} items={todos}/>
        </Fragment>
    );
}

export default App;
