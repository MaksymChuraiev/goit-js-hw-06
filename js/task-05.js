const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

const onInputName = (event) => {
  event.currentTarget.value < 1
    ? (refs.output.textContent = 'Anonymous')
    : (refs.output.textContent = event.currentTarget.value.trim());
};

refs.input.addEventListener('input', onInputName);
