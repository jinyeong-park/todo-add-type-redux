import React from 'react';

interface NewTodoInputProps {
  addTodo(todo:string): void;
}

export const NewTodoInput:React.FC<NewTodoInputProps> = ({ addTodo }) => {
  const [todo, setTodo] = React.useState("")
  const [deadline, setDeadline] = React.useState(0)

  const changeHandler:React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.name === 'todo') {
      setTodo(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }

  }

  return (
    <div>
      <input type='text' value={todo} name='todo' onChange={changeHandler} placeholder='Write todo...' />
      <input type='number' value={deadline} name='deadline' onChange={changeHandler} placeholder='Deadline...' />
      <button>Add Todo task</button>
    </div>
  )

}