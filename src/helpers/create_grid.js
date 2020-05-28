/**
 * Creates a matrix with the number for rows and columns inserted.
 * Default is all spaces are false.
 * @param {int} rows
 * @param {int} cols
 * returns {array} a matrix grid to be used
 */
export default function create_grid(rows, cols) {
  return Array(rows)
    .fill()
    .map(() => Array(cols).fill(false));
}
