// reducer : In redux, a reducer is a function that calculate new value for the state;
// reducer accepts two values (state and action)
// state: previous state value
// action:

// define type of our state
interface TodosState {
  todos: string[]
}

const initialState = {
  todos: []
}

type Action = {type: "ADD_TODO", payload: string}

export const todosReducer = (state, action) => {

}