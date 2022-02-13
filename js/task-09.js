function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  output: document.querySelector('.color'),
  btnInput: document.querySelector('.change-color'),
  header: document.querySelector('.header'),
};

console.log(refs.indicator);

const onChangeBackgroundColor = (event) => {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.output.textContent = getRandomHexColor();
  refs.header.style.backgroundColor = '#787c6a';
};

refs.btnInput.addEventListener('click', onChangeBackgroundColor);
