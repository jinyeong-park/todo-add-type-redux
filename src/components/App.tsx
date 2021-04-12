import React from 'react';
import '../App.css';
import { useSelector } from "react-redux";
import { NewTodoInput } from './NewTodoInput';
import { TodosState } from '../redux/todosReducer';

function App() {
  const addTodo = () => {
    // bring state from redux using useSelector hooks
    // useSelector<Type, return type of useSelector>
    const todos = useSelector<TodosState, TodosState["todos"]>((state) => state.todos)

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
