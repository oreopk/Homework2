const mobileMenu = document.querySelector('.mobile-menu');
const header = document.querySelector('.header');
const links = {
  features: document.querySelector('#features'),
  product: document.querySelector('#product'),
  topsell: document.querySelector('#top_sell'),
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
  // console.log(event.target);
  if (classes.includes('nav_a1')) {
    const content = event.target.innerText;

    //  console.log(content);
    switch (content) {
      case 'Features':
        links.features.scrollIntoView();
        mobileMenu.classList.remove('visible');
        mobileMenu.classList.add('hidden');
      case 'Product':
        links.product.scrollIntoView();
        mobileMenu.classList.remove('visible');
        mobileMenu.classList.add('hidden');
      case 'Blog':
        links.topsell.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest',
        });
        console.log(links.topsell);
        mobileMenu.classList.remove('visible');
        mobileMenu.classList.add('hidden');
      case 'new':
        links.product.scrollIntoView();
        mobileMenu.classList.remove('visible');
        mobileMenu.classList.add('hidden');
    }
  }
}

mobileMenu.addEventListener('click', scrollToSection);
header.addEventListener('click', scrollToSection);
