const mobileMenu = document.querySelector('.mobile-menu');
const header = document.querySelector('.header');
const links = {
  product: document.querySelector('#product'),
  topsell: document.querySelector('#top_sell'),
  trend: document.querySelector('#trend'),
  new_: document.querySelector('#new'),
};
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
        links.product.scrollIntoView();
        mobileMenu.classList.remove('visible');
        mobileMenu.classList.add('hidden');
      case 'product':
        links.topsell.scrollIntoView();
      case '#product':
        links.trend.scrollIntoView();
      case 'new':
        links.product.scrollIntoView();
    }
  }
}

mobileMenu.addEventListener('click', scrollToSection);
header.addEventListener('click', scrollToSection);
