'use strict';

// Elemente deklarieren
let raster = document.querySelector('.raster');
let numberBtn = document.querySelector('#numberBtn');


// divs erstellen & gleichmäßig im raster einordnen
for (let i = 0; i < 256; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.width = '50px';
    cell.style.height = '50px';
    raster.appendChild(cell);
}

// numberBtn-Funktion erstellen
numberBtn.addEventListener('click', () => {
    let cellMultiplier;
    do {
        cellMultiplier = parseInt(prompt('Wie viele Quadrate pro Seite? (max. 100)', 10))
    } while (isNaN(cellMultiplier) || cellMultiplier > 100);

    let sumCells = cellMultiplier**2;
    raster.innerHTML = '';

    for (let i = 0; i < sumCells; i++) {
        const newCell = document.createElement('div');
        newCell.classList.add('cell');

        const size = 800 / cellMultiplier;
        newCell.style.width = `${size}px`;
        newCell.style.height = `${size}px`;
        newCell.dataset.brightness = 100;

        raster.appendChild(newCell);
    }
})

