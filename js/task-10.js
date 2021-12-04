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

  // for (let i = 1; i < refs.output.childNodes.length; i += 1) {
  //   refs.output.childNodes[i].style.width = elSize += 10;
  //   // refs.output.childNodes[i].style.width = newSize;

  //   refs.output.childNodes[i].style.height = elSize;
  //   refs.output.childNodes[i].style.backgroundColor = getRandomHexColor();
  // }

  // refs.output.childNodes.forEach((el, ind) => {
  //   el.style.width = '30px';
  //   el.style.height = '30px';
  //   el.style.backgroundColor = getRandomHexColor();
  //   console.log(el);
  // });
};

const destroyBoxes = () => {
  refs.output.innerHTML = '';
  refs.input.value = '';
};

refs.btnCreate.addEventListener('click', createBoxes);
refs.btnDestroy.addEventListener('click', destroyBoxes);
