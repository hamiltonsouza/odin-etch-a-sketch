function divCreator(xSize,ySize) {
    for (let i = 1; i <= xSize; i++) {
        for (let j = 1; j <= ySize; j++) {
            const container = document.querySelector('.container');
            const divRow = document.createElement('div');
            if (i < 10 && j < 10) {divRow.classList.add(`x0${i}y0${j}`)}
            else if (i < 10 && j >= 10) {divRow.classList.add(`x0${i}y${j}`)}
            else if (i >= 10 && j < 10) {divRow.classList.add(`x${i}y0${j}`)}
            else {divRow.classList.add(`x${i}y${j}`)}
            container.appendChild(divRow);
        }
    }
};

let xSize = 16;
let ySize = 16;

divCreator(xSize,ySize);
