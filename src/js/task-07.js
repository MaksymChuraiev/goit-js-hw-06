const refs = {
  rangeInput: document.querySelector('#font-size-control'),
  rangeValue: document.querySelector('#text'),
};

const onRangeChange = (event) => {
  const { value } = event.target;

  refs.rangeValue.style.fontSize = `${value}px`;
};

refs.rangeInput.addEventListener('input', onRangeChange);
