import React from 'react';
import '../App.css';
import { NewTodoInput } from './NewTodoInput';

function App() {
  const addTodo = () => {

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
