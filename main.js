const container = document.getElementById("container");
const resizeGrid = document.getElementById("resize");
const shakeScreen = document.getElementById("shake");
const eraser = document.getElementById("eraser");
const black = document.getElementById("black");
const rainbow = document.getElementById("rainbow");


let grid = null

function createGrid(gridSize = 16) {
    for (let i = 0; i<gridSize**2; i++)
    {
        newDiv = document.createElement('div');
        newDiv.id = 'grid';
        newDiv.style.width = 600/gridSize + 'px';
        newDiv.style.height = 600/gridSize + 'px';
        container.appendChild(newDiv);
    }
    // Add eventListener 'mouseover' to all grid squares
    const grid = document.querySelectorAll('#grid');
    grid.forEach(item => {
        item.addEventListener('mouseover', event => {
            event.target.style.backgroundColor = 'black';
        });
    });
    return grid;
}

grid = createGrid();


function removeGrid(grid) {
    grid.forEach(item => {
        item.remove();
    });
}

function shake(grid) {
    grid.forEach(item => {
        item.target.style.backgroundColor = "grey";
    })
}

shakeScreen.onclick = function() {
    grid.forEach(item => {
        item.style.backgroundColor = "grey";
        });
    }

resizeGrid.onclick = function () {
    let dimensions = prompt("Give a grid dimension less than 100. \n This will be used as the length and width");
    while (dimensions > 100) {
        dimensions = prompt("Enter a dimension less than 100");
    }

    removeGrid(grid);
    grid = createGrid(dimensions);

}

eraser.onclick = function() {
    grid.forEach(item => {
        item.addEventListener('mouseover', e => {

            e.target.style.backgroundColor = "grey"
        });
        
    });

}

black.onclick = function() {
    grid.forEach(item => {
        item.addEventListener('mouseover', e => {

            e.target.style.backgroundColor = "black"
        });
        
    });

}

function rainbowColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}

rainbow.onclick = function() {
    grid.forEach(item => {
        item.addEventListener('mouseover', e => {

            e.target.style.backgroundColor = "#" + rainbowColor();
        });
        
    });

}

// function makeRows(rows, cols) {
//   container.style.setProperty('--grid-rows', rows);
//   container.style.setProperty('--grid-cols', cols);
//   for (c = 0; c < (rows * cols); c++) {
//     let cell = document.createElement("div");
//     cell.innerText = (c + 1);
//     container.appendChild(cell).className = "grid-item";
//   };
// };

// makeRows(16, 16);