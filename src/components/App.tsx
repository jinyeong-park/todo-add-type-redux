import React from 'react';
import '../styles/App.css';
import { useSelector } from "react-redux";
import { NewTodoInput } from './NewTodoInput';
import { TodosState } from '../redux/todosReducer';

const App = () => {
  const addTodo = () => {
    // bring state from redux using useSelector hooks
    // useSelector<Type, return type of useSelector>
    const todos = useSelector<TodosState, TodosState["todos"]>((state) => state.todos);

  }

  return (
    <>
      <NewTodoInput addTodo={alert}/>
      <hr/>
      <ul>
        {/* {todos.map((todo) => {
          <li key={todo}>{todo}</li>

        })} */}
      </ul>
    </>

  );
}

export default App;
