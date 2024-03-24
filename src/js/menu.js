export function menu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  const header = document.querySelector('.header');

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
}
