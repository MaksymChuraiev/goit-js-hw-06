function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('#controls input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  output: document.querySelector('#boxes'),
};

let elWidth = 20;
let elHeight = 20;

const createBoxes = (amount) => {
  const arr = Array(Number(refs.input.value))
    .fill('')
    .map(
      () =>
        `<div style="width: ${(elWidth += 10)}px; height: ${(elHeight += 10)}px;  background-color: ${getRandomHexColor()}"></div>`
    );

  refs.output.insertAdjacentHTML('beforeend', arr.join(''));
};

const destroyBoxes = () => {
  refs.output.innerHTML = '';
  refs.input.value = '';
  elWidth = 20;
  elHeight = 20;
};

refs.btnCreate.addEventListener('click', createBoxes);
refs.btnDestroy.addEventListener('click', destroyBoxes);
