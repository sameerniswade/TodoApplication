import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Authentication, Home } from "./pages";
function App() {
  return (
    <div className="flex justify-center items-center">
      <Home />
    </div>
  );
}

export default App;
