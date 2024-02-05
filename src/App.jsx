import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Authentication, Home } from "./pages";
import { useSelector, useDispatch } from "react-redux";

import { getTodos } from "./store/test";
function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("STATE", state);
  return (
    <div className="flex justify-center items-center">
      <Home />
    </div>
  );
}

export default App;
