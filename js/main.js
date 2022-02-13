// const list = document.querySelectorAll('.main-list');

// function activeLink() {
//   list.forEach((item) => item.classList.remove('active'));
//   e.currentTarget.classList.add('active');
// }

// list.forEach((item) => item.addEventListener('click', activeLink));

const countsItems = () => {
  const categoriesItemTitleEl = document.querySelectorAll('.item');

  console.log(`Number of categories: ${categoriesItemTitleEl.length}`);

  categoriesItemTitleEl.forEach((item) => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`);
  });
};

countsItems();
