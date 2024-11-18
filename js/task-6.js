function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls input');

const createBtn = document.querySelector('[data-create]');

const destroyBtn = document.querySelector('[data-destroy]');

const boxesEl = document.querySelector('#boxes');



createBtn.addEventListener('click', () => {
  const inputNumber = Number.parseInt(inputEl.value);

  if (isNaN(inputNumber) || inputNumber < 1 || inputNumber > 100) {
    alert('Please enter a number between 1 and 100');
    return;
  }
  
  createBoxes(inputNumber);
  inputEl.value ='';
});


function createBoxes(amount){
  boxesEl.innerHTML = '';

  for (let i = 0; i < amount; i++){
    const box = document.createElement('div');
    const size = 30 + i * 10;

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesEl.appendChild(box);
  }
}

destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxesEl.innerHTML = '';
}