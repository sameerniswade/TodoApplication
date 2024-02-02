import React, { useEffect, useState } from "react";

const [todos, setTodos] = useState([]);
useEffect(() => {
  fetch("https://dummyjson.com/todos")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setTodos(data.todos);
    });
}, []);

export default todos;
