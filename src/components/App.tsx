import React from "react";

import logo from "../assets/Hand.png";
import "./App.css";
import Scroller from "./Scroller/Scroller";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img
          className="app-logo"
          src={logo}
          alt="sketchy outline of a hand in red"
        />
        <h1 className="app-title">Hey, You</h1>
      </header>
      <Scroller />
    </div>
  );
}

export default App;
