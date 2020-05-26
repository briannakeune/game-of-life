import React from "react";

import { create_grid, calc_neighbours } from "./algo.js";

function App() {
  let rand_matrix = create_grid(3, 3);
  rand_matrix[1][1] = true

  // grabs value (i, j)
  // grabs index (k, p)
  rand_matrix.forEach((i, k) => {
    i.forEach((j, p) => console.log(k, p))
  })
  /**
   * so this can get my coordinates for each cell...
   * then how do I calculate all of it's neighbours.
   */

  return (
    <div className="App">
      <h1>Game of Life</h1>
    </div>
  );
}

export default App;
