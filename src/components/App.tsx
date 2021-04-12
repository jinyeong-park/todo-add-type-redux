import React from 'react';
import '../App.css';
import { useSelector } from "react-redux";
import { NewTodoInput } from './NewTodoInput';
import { TodosState } from '../redux/todosReducer';

function App() {
  const addTodo = () => {
    // bring state from redux using useSelector hooks
    const todos = useSelector<TodosState>((state) => state.todos)

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
