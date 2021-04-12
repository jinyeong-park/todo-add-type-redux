import React from 'react';
import './App.css';
import { NewTodoInput } from './components/NewTodoInput';

function App() {
  const addTodo = () => {

  }

  return (
    <>
      <NewTodoInput addTodo={addTodo}/>
      <hr/>
      <ul>
        <li>Some Todo</li>
      </ul>
    </>

  );
}

export default App;
