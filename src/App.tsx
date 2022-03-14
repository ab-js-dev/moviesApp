import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

import { MoviesContainer } from "./components/movies-container";

function App() {
  return (
    <div className="App">
      <MoviesContainer />
      <Outlet />
    </div>
  );
}

export default App;
