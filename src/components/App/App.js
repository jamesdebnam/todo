import React from "react";
import "./App.css";
import ToDos from "../ToDos/ToDos";
import Sidebar from "../Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="sidebar--container">
        <Sidebar />
      </div>

      <ToDos />
    </div>
  );
}

export default App;
