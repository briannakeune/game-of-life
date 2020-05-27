// Any live cell with fewer than two live neighbours dies, as if by underpopulation.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overpopulation.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

/**
 * This algorithm has to update cells within a grid to become alive or dead based on these rules.
 * So how will we determine if these cells are dead or alive?
 *      True & False
 *
 * What properites do these cells need?
 *  Current state: (alive, dead), (black, white)
 *   Clickable/Tappable:
 *       can be clicked to allow user to setup initial cell configuration
 *       should NOT be clickable while simulation is running
 *   Behaviors
 *       Toggle state functionality: switch between alive & dead either because user manually toggled cell before starting simulation or
 *          simulation is running and rules of life caused cell to change state
 *
 * How will I locate the cells on the grid?
 *      How do they do it in excel?
 *
 * What data structure will be best suited for holding these cells?
 *      A matrix with arrays?  |
 *                             v
 *
 * Will the double ring buffer solve my needs on updating for state?
 *      https://en.wikipedia.org/wiki/Multiple_buffering
 *      https://github.com/LambdaSchool/CS-Build-Week-1/tree/master/objectives/double-buffer
 *
 *          "There will be two arrays of data for the automaton. One of them holds the data that the user currently sees on the canvas.
 *           The other one is where the next frame to be shown is being actively constructed."
 *
 *      So we'll be displaying the grid, which should be held in an array...
 *      and then we can make a copy of that array to calculate updates in state of the cells.
 *
 *
 *      And these matrices... look like they have to be created with nested for loops.
 *          X Is there anything better?
 *      So If I have a matrix, how do I pin point a cell... grid...map...waypoints, [index][index] ✔ this works.
 *
 * How will I keep count of how many living neighbors a cell has?
 *      Should I have a counter for each cell?
 *      Should I make the cells classes with properties, such as above with a neighbor count?
 *      Classes in React are components?
 *
 * I do think I will use Context Api for this.
 *
 * Should I use any other tools or libraries for this?
 */

/**
 * Plan of attack:
 *
 * Input: the grid it's reading to determine the next generation.
 * Output: a new grid -> mutated copy of input grid
 *
 * What does my algorithm do?
 *     It determines the number of neighbours for each cell,
 *     base on how many neighbors it will update a cells state, or leave it alone.
 *     Returns the new grid...and we'll have to find a way for it to repeat (like recursion)
 *
 * Try to come up with something that works,
 * then create an interface,
 * make the algorithm work, then improve it
 */

/**
 * Calculates the new state of cells based on the Game of Life rules
 * @param {array} prev_grid
 * Returns new array of the next generation.
 */
function calc_next_generation(prev_grid) {
  // prev_grid[row][col]
  // create new grid_array to hold copy of prev_grid
  const next_gen = [];

  // grab each cell
  prev_grid.forEach((arr, row_index) => {
    arr.forEach((val, col_index) => {
      // determine the number of neighbours for each cell
      let neighbour_amount = calc_neighbours(row_index, col_index);
      // if a live cell has less than two live neighbours, it dies +
      // if a live cell has more than three live neighbours, it dies
      if ((val === true && neighbour_amount > 2) || (val === true && neighbour_amount > 3)) {
        val = false;
      }
      // if a dead cell has exactly three neighbours, it comes back alive
      if (val === false && neighbour_amount === 3){
          val = true
      }
      // if it has either 2 or 3 neighbours the state is unchanged ✔

      // how do I get all of this into the next_gen array?
    });
  });
  // return mutated new grid_array -> recurse through all cells?
  return next_gen;
}

/**
 * Creates a matrix with the number for rows and columns inserted.
 * Default is all spaces are false.
 * @param {int} rows
 * @param {int} cols
 * returns {array} a matrix grid to be used
 */
function create_grid(rows, cols) {
  return Array(rows)
    .fill()
    .map(() => Array(cols).fill(false));
}

/**
 * Returns the amount of live neighbours a given cell has.
 * @param {int} lat
 * @param {int} lon
 */
function calc_neighbours(grid, lat, lon) {
    console.log(`grid: ${grid}\nlat: ${lat}\nlon: ${lon}`)
    console.log(`GRID COORDS: ${grid[lat][lon]}`)
  // might update lat,lon to row, and col again.
  let neighbour_count = 0
  if (grid[lat -1][lon -1] == true) neighbour_count ++
  // what are the possible neighbours?
  // what am I going to do about the edge lines?
  // given coordinates... how do I see which neighbours are alive?
  return neighbour_count
}

export { calc_next_generation, create_grid, calc_neighbours };