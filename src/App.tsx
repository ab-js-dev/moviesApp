import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { MoviesHeader } from "./components/movies-header";

function App() {
  return (
    <div className="App">
      <MoviesHeader />
      <Outlet />
    </div>
  );
}

export default App;
