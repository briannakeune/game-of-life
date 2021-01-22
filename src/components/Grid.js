import React from "react";

export default function Grid({ grid, setGrid, gridVal }) {
  return (
    <div className="grid">
      {grid.map((arr, row_index) =>
        arr.map((val, col_index) => (
          <div
            key={`[${row_index}][${col_index}]`}
            className={`${grid[row_index][col_index] ? "alive" : "dead"} cell`}
            onClick={() => {
              // have to update this to be gridB / toggling
              const new_grid = [...grid];
              new_grid[row_index][col_index] = grid[row_index][col_index]
                ? false
                : true;
              setGrid(new_grid);
            }}
          />
        ))
      )}
    </div>
  );
}
