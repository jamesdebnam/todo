import React from "react";
import "./App.css";
import Todos from "../Todos/Todos";
import Sidebar from "../Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="sidebar--container">
        <Sidebar />
      </div>

      <Todos />
    </div>
  );
}

export default App;
