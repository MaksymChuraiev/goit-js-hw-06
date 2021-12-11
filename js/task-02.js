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

  const ingredientsList = ingredients.map((el) => {
    const ingredient = document.createElement('li');
    ingredient.textContent = el;
    ingredient.classList.add('item');

    return ingredient;
  });

  ingredientsEl.append(...ingredientsList);
};

createList();
