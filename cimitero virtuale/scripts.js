const cemetery = document.querySelector('.cemetery');
const rows = 100; // For example, for a 100x100 grid
const cols = 100;

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('data-coord', `R${i + 1}C${j + 1}`); // Set the coordinates as a data attribute
        cell.title = `Row ${i + 1}, Column ${j + 1}`; // Tooltip with the coordinates
        cemetery.appendChild(cell);
    }
}

const magnifierBtn = document.getElementById('magnifierBtn');
const coordinateForm = document.getElementById('coordinateForm');
const rowInput = document.getElementById('rowInput');
const colInput = document.getElementById('colInput');
const highlightBtn = document.getElementById('highlightBtn');
const resetBtn = document.getElementById('resetBtn');
const closeBtn = document.getElementById('closeBtn');

// Function to remove highlighting from all cells
function removeHighlight() {
    const highlightedCells = document.querySelectorAll('.cell.highlighted');
    highlightedCells.forEach(cell => cell.classList.remove('highlighted'));
}

magnifierBtn.addEventListener('click', () => {
    coordinateForm.style.display = 'block';
});

highlightBtn.addEventListener('click', () => {
    removeHighlight(); // Remove highlighting from cells before highlighting the new cell
    const row = rowInput.value;
    const col = colInput.value;
    const targetCell = document.querySelector(`[data-coord="R${row}C${col}"]`);
    if (targetCell) {
        targetCell.classList.add('highlighted');
        targetCell.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});

resetBtn.addEventListener('click', () => {
    removeHighlight();
    rowInput.value = '';
    colInput.value = '';
});

closeBtn.addEventListener('click', () => {
    coordinateForm.style.display = 'none';
});
