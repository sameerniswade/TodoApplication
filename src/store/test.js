import React, { useEffect, useState } from "react";

export const getTodos = () => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTodos(data.todos);
      });
  }, []);
  return todos;
};
