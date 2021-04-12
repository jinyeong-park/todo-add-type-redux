import React from 'react';

interface NewTodoInputProps {
  addTodo(todo:string): void;
}

export const NewTodoInput:React.FC<NewTodoInputProps> = ({ addTodo }) => {
  const [todo, setTodo] = React.useState("")

  return (
    <div>
      <input type='text' placeholder='Write todo...' />
      <button>Add Todo task</button>
    </div>
  )

}