/* START TASK 1: Your code goes here */
// Get the table element
const table = document.getElementById('myTable');

// Get all cells in the table
const cells = table.querySelectorAll('.cell');

// Add event listeners to cells
cells.forEach((cell) => {
  cell.addEventListener('click', () => {
    // Toggle yellow background color
    if (cell.style.backgroundColor !== 'yellow') {
      cell.style.backgroundColor = 'yellow';
    } else {
      cell.style.backgroundColor = 'white';
    }

    // Toggle blue background color on row
    const row = cell.parentNode;
    if (cell.cellIndex === 0) {
      if (row.style.backgroundColor !== 'blue') {
        row.style.backgroundColor = 'blue';
      } else {
        row.style.backgroundColor = '';
      }
    }

    // Toggle yellow background color on whole table
    if (cell.classList.contains('special')) {
      cells.forEach((cell) => {
        if (cell.classList.contains('special')) {
          cell.style.backgroundColor = 'green';
        } else {
          cell.style.backgroundColor = 'yellow';
        }
      });
    }

    // Set priority of colors
    cells.forEach((cell) => {
      if (cell.style.backgroundColor === 'yellow') {
        cell.style.backgroundColor = 'yellow';
      } else if (cell.parentNode.style.backgroundColor === 'blue') {
        cell.style.backgroundColor = 'blue';
      } else {
        cell.style.backgroundColor = 'white';
      }
    });
  });
});

/* END TASK 1 */

/* START TASK 2: Your code goes here */

/* END TASK 2 */

/* START TASK 3: Your code goes here */

/* END TASK 3 */
