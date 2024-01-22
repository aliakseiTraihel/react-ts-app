import { createSlice } from "@reduxjs/toolkit";

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
    {'id': '1', 'text': 'first', 'status': 'active'},
    {'id': '2', 'text': 'second', 'status': 'active'},
    {'id': '3', 'text': 'third', 'status': 'active'}
  ]
} as TodoState;

export const todoSlice  = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo: (state, action)=>{
      const todo = action.payload;
      state.todos.push(todo);
      return state;
    },
    onEdit: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          console.log(action.payload)
          return {
            ...action.payload
          };
        }
        return todo;
      });
      return state;
    },
    onDelete: (state, action) => {
      console.log(action.payload.id)
      state.todos.filter((item) => {
        console.log(item.id !== action.payload.id)
        item.id !== action.payload.id;
      });
      return state;
    }
  }
})

export const {addTodo, onEdit, onDelete} = todoSlice.actions;
export default todoSlice.reducer;