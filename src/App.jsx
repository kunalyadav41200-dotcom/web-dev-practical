import React from "react";
import "./App.css";

import LikeButton from "./components/LikeButton";
import FetchUsers from "./components/FetchUsers";

function App() {
  return (
    <div className="container">
      <h1>Set 4</h1>

      <div className="card">
        <LikeButton />
      </div>

      <div className="card">
        <FetchUsers />
      </div>
    </div>
  );
}

export default App;