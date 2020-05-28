import { calc_neighbours } from "./";
/**
 * Calculates the new state of cells based on the Game of Life rules
 * @param {array} prev_grid
 * Returns new array of the next generation.
 */
export default function calc_next_gen(prev_grid) {
  // create new grid_array to hold copy of prev_grid
  const next_gen = [...prev_grid];

  // grab each cell
  next_gen.forEach((arr, row_index) => {
    arr.forEach((val, col_index) => {
      // determine the number of neighbours for each cell
      let neighbour_amount = calc_neighbours(next_gen, row_index, col_index);
      // if a live cell has less than two live neighbours, it dies or
      // if a live cell has more than three live neighbours, it dies
      if (
        (val === true && neighbour_amount > 2) ||
        (val === true && neighbour_amount > 3)
      ) {
        val = false;
      }
      // if a dead cell has exactly three neighbours, it comes back alive
      if (val === false && neighbour_amount === 3) {
        val = true;
      }
      // if it has either 2 or 3 neighbours the state is unchanged ✔
    });
  });
  // return mutated new grid_array -> recurse through all cells?
  return next_gen;
}
