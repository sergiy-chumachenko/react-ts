import Todos from "./components/Todos";
import './App.css';

function App() {
    return (
        <Todos items={
            ['Learn React', 'Learn Typescript']
        }/>
    );
}

export default App;
