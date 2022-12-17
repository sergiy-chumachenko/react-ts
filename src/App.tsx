import Todos from "./components/Todos";
import Todo from './models/todo';
import './App.css';
import NewTodo from "./components/NewTodo";
import {Fragment} from "react";

function App() {
    const todos = [
        new Todo("Learn React"),
        new Todo("Learn TypeScript")
    ]
    const addTodoHandler = (todoText: string) => {
    };

    return (
        <Fragment>
            <NewTodo onAddTodo={addTodoHandler}/>
            <Todos items={todos}/>
        </Fragment>
    );
}

export default App;
