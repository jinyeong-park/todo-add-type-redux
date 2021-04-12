import React from 'react';
import './App.css';
import { NewTodoInput } from './components/NewTodoInput';

function App() {
  return (
    <>
      <NewTodoInput />
      <hr/>
      <ul>
        <li>Some Todo</li>
      </ul>
    </>

  );
}

export default App;
