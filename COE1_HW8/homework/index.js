/* START TASK 1: Your code goes here */
const table = document.querySelector('table');
const cells = document.querySelectorAll('td');

let selectedCells = [];
let selectedRows = [];

function toggleSelectedCell(cell) {
  if (cell.classList.contains('selected')) {
    cell.classList.remove('selected');
    cell.style.backgroundColor = '';
    selectedCells.splice(selectedCells.indexOf(cell), 1);
  } else {
    cell.classList.add('selected');
    cell.style.backgroundColor = 'yellow'; 
    cell.style.backgroundColor = 'blue';  
    selectedCells.push(cell);
  }
}
function toggleSelectedRow(row) {
  if (row.classList.contains('selected-row')) {
    row.classList.remove('selected-row');
    row.style.backgroundColor = '';
    selectedRows.splice(selectedRows.indexOf(row), 1);
  } else {
    row.classList.add('selected-row');
    row.style.backgroundColor = 'blue';
    selectedRows.push(row);
  }
}
function toggleTableColor() {
  if (table.classList.contains('selected')) {
    table.classList.remove('selected');
    cells.forEach(cell => {
      if (!cell.classList.contains('selected')) {
        cell.style.backgroundColor = '';
      }
    });
    selectedCells = [];
    selectedRows.forEach(row => {
      if (!row.classList.contains('selected-row')) {
        row.style.backgroundColor = '';
      }
    });
    selectedRows = [];
  } else {
    table.classList.add('selected');
    cells.forEach(cell => {
      if (!cell.classList.contains('selected')) {
        cell.classList.add('selected');
        cell.style.backgroundColor = 'yellow';
        selectedCells.push(cell);
      }
    });
  }
}
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (cell.classList.contains('special')) {
      toggleTableColor();
    } else {
      toggleSelectedCell(cell);
      if (cell.classList.contains('col-1')) {
        const row = cell.parentNode;
        toggleSelectedRow(row);
      }
    }
  });
});
table.addEventListener('click', function(event) {
  const clickedCell = event.target;
  if (clickedCell.cellIndex === 0) {
    const row = clickedCell.parentNode;
    if (!row.classList.contains('selected-row')) {
      toggleSelectedRow(row);
    }
  }
});
/* END TASK 1 */

/* START TASK 2: Your code goes here */
const phoneNumberInput = document.getElementById('phone-number');
 const sendButton = document.getElementById('send-button');
 const notification = document.getElementById('notification');
 
 phoneNumberInput.addEventListener('input', validatePhoneNumber);
 
 function validatePhoneNumber() {
   const phoneNumber = phoneNumberInput.value.trim();
   const regex = /^\+380\d{9}$/;
 
   if (!regex.test(phoneNumber)) {
     phoneNumberInput.classList.add('invalid');
     sendButton.disabled = true;
     notification.textContent = 'Type number does not follow format +380*********';
     notification.classList.remove('hidden');
     notification.classList.remove('success');
     notification.classList.add('error');
   } else {
     phoneNumberInput.classList.remove('invalid');
     sendButton.disabled = false;
     notification.classList.add('hidden');
     notification.classList.remove('error');
   }
 }
 
 sendButton.addEventListener('click', showSuccessNotification);
 function showSuccessNotification() {
   const phoneNumber = phoneNumberInput.value.trim();
   notification.textContent = `Data ${phoneNumber} was successfully sent.`;
   notification.classList.remove('hidden');
   notification.classList.remove('error');
   notification.classList.add('success');
 }
/* END TASK 2 */

/* START TASK 3: Your code goes here */

/* END TASK 3 */
