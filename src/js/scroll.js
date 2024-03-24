const mobileMenu = document.querySelector('.mobile-menu');
const header = document.querySelector('.header');
const links = {
  features: document.querySelector('#features'),
  product: document.querySelector('#product'),
  topsell: document.querySelector('#top_sell'),
  new_: document.querySelector('#new'),
};
export default function scrollToSection(event) {
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
        links.topsell.scrollIntoView();
        console.log(links.topsell);
        mobileMenu.classList.remove('visible');
        mobileMenu.classList.add('hidden');
      case 'About':
        links.new_.scrollIntoView();
        mobileMenu.classList.remove('visible');
        mobileMenu.classList.add('hidden');
    }
  }
}
mobileMenu.addEventListener('click', scrollToSection);
header.addEventListener('click', scrollToSection);
