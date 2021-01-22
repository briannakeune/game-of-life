import React, { useState, useEffect } from "react";
import "./App.css";

import { create_grid, calc_next_gen } from "./helpers";
import Grid from "./components/Grid.js";
function App() {
  const [gridValue, setGridValue] = useState({ val: 25 });
  const [displayGrid, setDisplayGrid] = useState(
    create_grid(gridValue.val, gridValue.val)
  );
  const [running, setRunning] = useState(false);
  let [genCounter, setGenCounter] = useState(0);
  let gridA = displayGrid;
  let gridB = displayGrid;
  const speed = [1000, 500, 200];
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (!running) return;
    setTimeout(() => {
      if (genCounter % 2 === 0) {
        console.log("gridA");
        setGenCounter(genCounter + 1);
        setDisplayGrid(calc_next_gen(gridA, gridB));
      } else if (genCounter % 2 !== 0) {
        console.log("gridB");
        setGenCounter(genCounter + 1);
        setDisplayGrid(calc_next_gen(gridB, gridA));
      }
    }, speed[amount]);
  }, [
    running,
    displayGrid,
    genCounter,
    gridA,
    gridB,
    speed,
    amount,
    gridValue.val,
  ]);

  function start() {
    setRunning(!running);
  }

  function next() {
    if (genCounter % 2 === 0) {
      setDisplayGrid(calc_next_gen(gridA, gridB));
    } else if (genCounter % 2 !== 0) {
      setDisplayGrid(calc_next_gen(gridB, gridA));
    }
    setGenCounter(genCounter + 1);
  }

  function adjustSpeed() {
    if (amount < 4) return setAmount(amount + 1);
    setAmount(0);
  }

  function handleChange(e) {
    setGridValue({ val: Number(e.target.value) });
    setDisplayGrid(create_grid(25, 25));
    setDisplayGrid(create_grid(gridValue.val, gridValue.val));
  }

  console.log("gridValue: ", gridValue.val);
  return (
    <div className="App">
      <h1>Game of Life</h1>
      <div className="grid-container">
        <Grid
          grid={displayGrid}
          setGrid={setDisplayGrid}
          gridVal={gridValue.val}
        />
      </div>
      <p>Generation: {genCounter}</p>
      <div className="commands">
        <button onClick={start}>{running ? "Stop" : "Start"}</button>
        <button onClick={next}>Next</button>
        <button onClick={adjustSpeed}>>>Faster</button>
        <button
          onClick={() =>
            setDisplayGrid(create_grid(gridValue.val, gridValue.val))
          }
        >
          Clear
        </button>
      </div>
      <form>
        <label htmlFor="grid-size">Choose a grid size: </label>
        <select name="grid-size" onChange={handleChange}>
          <option value="25">25x25</option>
          <option value="50">50x50</option>
          <option value="75">75x75</option>
        </select>
      </form>
      <div className="rules">
        <h3>Conway's Game of Life Rules:</h3>
        <ol>
          <li>
            Any live cell with fewer than two live neighbours dies, as if by
            underpopulation.
          </li>
          <li>
            Any live cell with two or three live neighbours lives on to the next
            generation.
          </li>
          <li>
            Any live cell with more than three live neighbours dies, as if by
            overpopulation.
          </li>
          <li>
            Any dead cell with exactly three live neighbours becomes a live
            cell, as if by reproduction.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default App;
