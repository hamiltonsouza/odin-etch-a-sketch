function divCreator(xDivs,yDivs) {
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

let xDivs = 16;
let yDivs = 16;

let xSize = Math.floor(900 / xDivs);
let ySize = Math.floor(900 / yDivs);

divCreator(xDivs,yDivs);

let root = document.querySelector(':root');
let rootStyles = getComputedStyle(root);
let squareDivWidth = rootStyles.getPropertyValue('--squareDivWidth');
let squareDivHeight = rootStyles.getPropertyValue('--squareDivHeight');
root.style.setProperty('--squareDivWidth',`${xSize}px`);
root.style.setProperty('--squareDivHeight',`${ySize}px`);

const divContainer = document.querySelector('.container');

divContainer.addEventListener("mouseover", (event) => {
    event.target.classList.add('blackDivSquare');
});
