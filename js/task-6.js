function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215)  
        .toString(16)  
        .padStart(6, 0)}`;  
}  

const input = document.querySelector('#controls input');  
const createButton = document.querySelector('[data-create]');  
const destroyButton = document.querySelector('[data-destroy]');  
const boxesContainer = document.querySelector('#boxes');  

function destroyBoxes() {  
    boxesContainer.innerHTML = '';  
}  

function createBoxes(amount) {  
    destroyBoxes();  
    const boxes = [];  
    for (let i = 0; i < amount; i++) {  
        const size = 30 + i * 10;  
        const box = document.createElement('div');  
        box.style.width = `${size}px`;  
        box.style.height = `${size}px`;  
        box.style.backgroundColor = getRandomHexColor();  
        box.classList.add('box');  
        boxes.push(box);  
    }  
    boxesContainer.append(...boxes);  
}  

createButton.addEventListener('click', () => {  
    const amount = Number(input.value);  
    if (amount < 1 || amount > 100) {  
        return;  
    }  
    createBoxes(amount);  
    input.value = ''; 
});  

destroyButton.addEventListener('click', destroyBoxes);
