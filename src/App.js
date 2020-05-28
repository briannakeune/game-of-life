import React, { useState, useEffect } from "react";
import "./App.css";

import { create_grid, calc_next_gen } from "./helpers";
import Grid from "./components/Grid.js";

function App() {
  const [rows, setRows] = useState(25);
  const [cols, setCols] = useState(25);
  const [gridA, setGridA] = useState(create_grid(rows, cols));
  // const [gridB, setGridB] = useState([...gridA]);

  useEffect(() => {
    calc_next_gen(gridA)
  }, [gridA])

  return (
    <div className="App">
      <h1>Game of Life</h1>
      <Grid grid={gridA} setGrid={setGridA} />
    </div>
  );
}

export default App;
