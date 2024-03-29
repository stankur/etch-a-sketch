const container = document.getElementById('container');

function createNewCanvas(pixelPerSide) {
    container.innerHTML = '';
    console.log(container);

    container.style.gridTemplateRows = `repeat(${pixelPerSide}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${pixelPerSide}, 1fr)`;

    for (let i = 0; i < Math.pow(pixelPerSide, 2); i++) {
        let div = document.createElement('div');
        div.classList.add('small-box');
        div.classList.add('untouched');

        container.appendChild(div);
        }

    togglePaintAbility();
}

function togglePaintAbility() {

    const smallBoxes = document.querySelectorAll('.small-box');

    smallBoxes.forEach((item) => {
        item.addEventListener('mouseenter', (e) => {
            e.target.classList.remove('untouched');
            e.target.classList.add('hover');
        })
    })
}

createNewCanvas(4);

const button = document.querySelector('#new-resolution-request');
button.addEventListener('click', (e) => {
    let sidePixels = Number(prompt('How many pixels you want for each side?',
                                   'please enter an integer less than 100'));

    while(!(sidePixels <= 100 && sidePixels >= 0)) {
        sidePixels = Number(prompt('How many pixels you want for each side?',
                                   'please enter an integer less than 100'));
    }

    if (sidePixels) {
        createNewCanvas(sidePixels);
    } else {
        createNewCanvas(4);
    }
})


