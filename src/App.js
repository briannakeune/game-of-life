import React from "react";

import { create_grid } from "./algo.js";

function App() {
  let rand_matrix = create_grid(3, 3);
  console.log(rand_matrix);
  return (
    <div className="App">
      <h1>Game of Life</h1>
    </div>
  );
}

export default App;
