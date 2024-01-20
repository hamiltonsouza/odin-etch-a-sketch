function createCanvas() {
    const canvasLength = parseInt(prompt('Please, enter the desired canvas size:'));
    if (isNaN(canvasLength)) {
        alert('It must be a number!');
        createCanvas();
        return;
    } else if (canvasLength < 0) {
        alert('It must be a positive number!');
        createCanvas();
        return;
    } else if (canvasLength > 100) {
        alert('It must be less than a hundred!');
        createCanvas();
        return;
    } else {
        const canvasHeight = canvasLength;
        setCanvasSize(canvasLength,canvasHeight);
        const container = document.querySelector('.container');
        const allSquares = document.querySelectorAll('.squareDiv');
        resetCanvas(container,allSquares);
        createDivs(canvasLength,canvasHeight);
    }
};

function setCanvasSize(xDivs,yDivs) {
    let xSize = Math.floor(900 / xDivs);
    let ySize = Math.floor(900 / yDivs);
    let root = document.querySelector(':root');
    root.style.setProperty('--squareDivWidth',`${xSize}px`);
    root.style.setProperty('--squareDivHeight',`${ySize}px`);
};

function resetCanvas(container,allSquares) {
    const allSquaresArray = Array.from(allSquares);
    allSquaresArray.forEach((square) => container.removeChild(square));
};

function createDivs(xDivs,yDivs) {
    for (let i = 1; i <= xDivs; i++) {
        for (let j = 1; j <= yDivs; j++) {
            const container = document.querySelector('.container');
            const divSquare = document.createElement('div');
            divSquare.classList.add('squareDiv');
            if (i < 10 && j < 10) {divSquare.classList.add(`x0${i}`);divSquare.classList.add(`y0${j}`)}
            else if (i < 10 && j >= 10) {divSquare.classList.add(`x0${i}`);divSquare.classList.add(`y${j}`)}
            else if (i >= 10 && j < 10) {divSquare.classList.add(`x${i}`);divSquare.classList.add(`y0${j}`)}
            else {divSquare.classList.add(`x${i}`);divSquare.classList.add(`y${j}`)};
            container.appendChild(divSquare);
        }
    }
};

const divContainer = document.querySelector('.container');
divContainer.addEventListener('mouseover', (event) => {
    event.target.classList.add('blackDivSquare');
});

const resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click', createCanvas);

createCanvas();
