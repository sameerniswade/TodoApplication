import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addTodo: (state, action) => {},
    deleteTodo: (state, action) => {},
    editTodo: (state, action) => {},
  },
});

export const { login, logout } = todoSlice.actions;
export default todoSlice.reducer;
