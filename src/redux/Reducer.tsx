import {createSlice} from "@reduxjs/toolkit";

export interface TodoInterface {
  id: string,
  text: string,
  status: string,
}

export interface TodoState {
  todos: Array<TodoInterface>
}

const initialState = {
  todos: [
    {'id': '1', 'text': 'first', 'status': 'create'},
    {'id': '2', 'text': 'second', 'status': 'create'},
    {'id': '3', 'text': 'third', 'status': 'create'}
  ]
} as TodoState;

export const todoSlice  = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo: (state, action)=>{
      const todo = action.payload;
      state.todos.push(todo);
    }
  }
})

export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;