import { createSlice } from "@reduxjs/toolkit";
import { getTodos } from "./test";
import { set } from "react-hook-form";

const initialState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    complateTodo: (state, action) => {
      let s = state.todos.map((todo) => {
        if (todo.id == action.payload) {
          if (todo.completed == true) {
            todo.completed = false;
            return todo;
          } else {
            todo.completed = true;
            return todo;
          }
        } else {
          return todo;
        }
      });

      console.log(s);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) =>
        todo.id == action.payload ? null : todo
      );
    },
    editTodo: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id == action.payload.id) {
          return (todo.todo = action.payload.text);
        } else {
          return todo;
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, editTodo, complateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
