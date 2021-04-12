import React from 'react';
import '../App.css';
import { NewTodoInput } from './NewTodoInput';

function App() {
  const addTodo = () => {
    // bring state from redux using useSelector hooks
    const todos = useSelector<>((state) => state.todos)

  }

  return (
    <>
      <NewTodoInput addTodo={alert}/>
      <hr/>
      <ul>
        <li>Some Todo</li>
      </ul>
    </>

  );
}

export default App;
