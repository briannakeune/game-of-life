import React, { useState, useEffect } from "react";
import "./App.css";

import { create_grid, calc_next_gen } from "./helpers";
import Grid from "./components/Grid.js";
import Commands from "./components/Commands.js";

/**
 * Todo:
 * use setRows, and setCols for users to update
 * how large the grid is.
 */
function App() {
  const [rows, setRows] = useState(25);
  const [cols, setCols] = useState(25);
  const [displayGrid, setDisplayGrid] = useState(create_grid(rows, cols));
  const [running, setRunning] = useState(false);
  let [genCounter, setGenCounter] = useState(0);

  let gridA = displayGrid;
  let gridB = [];

  useEffect(() => {
    if (!running) return;
    setTimeout(() => {
      if (genCounter % 2 === 0) {
        setDisplayGrid(calc_next_gen(gridA, gridB));
      } else if (genCounter % 2 !== 0) {
        setDisplayGrid(calc_next_gen(gridB, gridA));
      }
      setGenCounter(genCounter++);
    }, 2000);
  }, [running, gridA, gridB, genCounter]);

  return (
    <div className="App">
      <h1>Game of Life</h1>
      <Grid grid={displayGrid} setGrid={setDisplayGrid} />
      <Commands running={running} setRunning={setRunning} />
      <p>Generation: {genCounter}</p>
    </div>
  );
}

export default App;
