import React from "react";
import "./App.css";
import ToDos from "../ToDos/ToDos";

function App() {
  return (
    <div className="App">
      <div className="sidebar--container">sidebar</div>

      <ToDos />
    </div>
  );
}

export default App;
