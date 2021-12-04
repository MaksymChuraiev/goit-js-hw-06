function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  output: document.querySelector('.color'),
  btnInput: document.querySelector('.change-color'),
};

const onChangeBackgroundColor = (event) => {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.output.textContent = getRandomHexColor();
};

refs.btnInput.addEventListener('click', onChangeBackgroundColor);
