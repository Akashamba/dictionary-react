import React from "react";
import Homepage from "./pages/homepage/homepage.component";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Minimal Dictionary</h1>
      <h2>Type your word here</h2>
      <Homepage />
    </div>
  );
}
