const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createList = () => {
  const ingredientsEl = document.querySelector('#ingredients');

  ingredients.map((el) => {
    const ingredient = document.createElement('li');

    ingredient.textContent = el;
    ingredient.classList.add('item');

    ingredientsEl.append(ingredient);
  });
};

createList();
