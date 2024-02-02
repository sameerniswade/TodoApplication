import { createSlice } from "@reduxjs/toolkit";
import todos from "./test";
const initialState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = todos;
      // state.todos = action.payload;
    },
    addTodo: (state, action) => {
      state.todos = state.todos.push(action.payload.todo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) =>
        todo.id == action.payload.id ? null : todo
      );
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        return todo.id == action.payload.id
          ? (todo.todo = action.payload.text)
          : todo;
      });
    },
  },
});

export const { setTodos, addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
