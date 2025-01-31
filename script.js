'use strict';

// innerhalb des rasters 16x16er divs erstellen, sodass das Raster gefüllt mit rechteckigen divs gleicher Größe ist
let raster = document.querySelector('.raster');

// erstens:
// divs erstellen
for (let i = 0; i < 256; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.width = '50px';
    cell.style.height = '50px';
    cell.style.border = '1px solid black'; // Optional: Rahmen hinzufügen
    raster.appendChild(cell);
}

// zweitens:
// divs gleichmäßig im raster einordnen