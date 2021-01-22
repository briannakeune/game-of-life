/**
 * Returns the amount of live neighbours a given cell has.
 * @param {int} lat
 * @param {int} lon
 */
export default function calc_neighbours(grid, lat, lon) {
  // coordinates of possible neighbours for a given cell
  const possible_neighbours = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0],
  ];

  let neighbour_count = 0;

  // possible_neighbours.forEach(([x, y]) => {
  //   let row = lat + x;
  //   let col = lon + y;
  //   // checks the bounds of the grid so we do not leave it...
  //   // may update so that it can move to the far side of the grid
  //   if (row >= 1 && row < grid.length && col >= 1 && col < 25) {
  //     let cell = grid[row][col];
  //     if (cell === true) neighbour_count += 1;
  //   }
  // });

  possible_neighbours.forEach((coords) => {
    let row = lat + coords[0];
    let col = lon + coords[1];
    // checks the bounds of the grid so we do not leave it...
    // may update so that it can move to the far side of the grid
    if (row >= 1 && row < grid.length && col >= 1 && col < 25) {
      let cell = grid[row][col];
      if (cell === true) neighbour_count += 1;
    }
  });
  return neighbour_count;
}
