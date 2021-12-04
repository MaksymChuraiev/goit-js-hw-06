const refs = {
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
  value: document.querySelector('#value'),
};

let counterValue = 0;

const changeValue = (step) => {
  counterValue = counterValue + step;
  refs.value.textContent = counterValue;
};

refs.decrement.addEventListener('click', () => changeValue(-1));
refs.increment.addEventListener('click', () => changeValue(+1));
