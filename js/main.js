const mobileMenu = document.querySelector('.mobile-menu');
const header = document.querySelector('.header');

const product = document.querySelector('#product');
const topsell = document.querySelector('#top_sell');
const trend = document.querySelector('#trend');
const new_ = document.querySelector('#new');

document.querySelector('.menu_button').addEventListener('click', (event) => {
  mobileMenu.classList.remove('hidden');
  mobileMenu.classList.add('visible');
});

mobileMenu
  .querySelector('.mobile-menu__close')
  .addEventListener('click', (event) => {
    mobileMenu.classList.remove('visible');
    mobileMenu.classList.add('hidden');
  });

function scrollToSection(event) {
  const classes = event.target.className;
  if (classes.includes('nav_a')) {
    switch (console.log(content)) {
      case '#product':
        link.products.scrollIntoView();
        mobileMenu.classList.remove('visible');
        mobileMenu.classList.add('hidden');
      case 'Products':
        link.products.scrollIntoView();
      case 'Blog':
        link.products.scrollIntoView();
      case 'new':
        link.products.scrollIntoView();
    }
  }
}

mobileMenu.addEventListener('click', scrollToSection);
header.addEventListener('click', scrollToSection);
