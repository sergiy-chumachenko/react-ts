import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import './App.css';
import TodosContextProvider from "./store/todos-context";

function App() {
    // const [todos, setTodos] = useState<Todo[]>([]);
    // const addTodoHandler = (todoText: string) => {
    //     const newTodo = new Todo(todoText);
    //     setTodos((prevTodos) => {
    //         return prevTodos.concat(newTodo);
    //     })
    // };
    // const removeTodoHandler = (todoId: string) => {
    //     setTodos((prevTodos) => {
    //         return prevTodos.filter(todo => todo.id !== todoId);
    //     })
    // };

    return (
        <TodosContextProvider>
            {/*<NewTodo onAddTodo={addTodoHandler}/>*/}
            <NewTodo/>
            {/*<Todos onRemoveTodo={removeTodoHandler} items={todos}/>*/}
            <Todos/>
        </TodosContextProvider>
    );
}

export default App;
