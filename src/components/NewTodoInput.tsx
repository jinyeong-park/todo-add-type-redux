import React from 'react';

interface NewTodoInputProps {
  addTodo(todo:string): void;
}

export const NewTodoInput:React.FC<NewTodoInputProps> = ({ addTodo }) => {
  const [todo, setTodo] = React.useState("")
  const [deadline, setDeadline] = React.useState(0)

  // // way 1
  // const changeHandler:React.ChangeEventHandler<HTMLInputElement> = (event) => {
  //   if (event.target.name === 'todo') {
  //     setTodo(event.target.value)
  //   } else {
  //     setDeadline(Number(event.target.value))
  //   }
  // }

  // way2
  const changeHandler= (event:React.ChangeEvent<HTMLInputElement> ) => {
    if (event.target.name === 'todo') {
      setTodo(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }
  }

  // callback for onClick
  const AddTodoClick= (event: React.MouseEvent) => {
    event.preventDefault()

  }

  return (
    <div>
      <input type='text' value={todo} name='todo' onChange={changeHandler} placeholder='Write todo...' />
      <input type='number' value={deadline} name='deadline' onChange={changeHandler} placeholder='Deadline...' />
      <button onClick={AddTodoClick}>Add Todo task</button>
    </div>
  )

}