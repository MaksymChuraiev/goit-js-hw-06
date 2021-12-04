const countsItems = () => {
  const categoriesItemTitleEl = document.querySelectorAll('.item');

  console.log(`Number of categories: ${categoriesItemTitleEl.length}`);

  categoriesItemTitleEl.forEach((item) => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`);
  });
};

countsItems();
