function divCreator(xSize) {
    for (let i = 1; i <= xSize; i++) {
        const container = document.querySelector('.container');
        const divRow = document.createElement('div');
        if (i < 10){divRow.classList.add(`x0${i}`)}
        else {divRow.classList.add(`x${i}`)}
        container.appendChild(divRow);
    }
};

let xSize = 16;

divCreator(xSize);
