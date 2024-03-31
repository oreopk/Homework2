import getHeadphones from './js/service/get-headphones.js';
import { isShowWelcomePopup, showWelcomePopup } from './js/pup.js';
let module = await import('./js/tab.js');

//import { tab } from './js/tab.js';
import scss from './scss/main.scss';
import { menu } from './js/menu.js';
import Header from './js/sections/header.js';

const header = new Header('header');
header.setTemplate();
header.createHeader('body');
menu();
async function x() {
  let cardInfoTopPicksList = await getHeadphones();
  console.log('Вывод после экспорта' + cardInfoTopPicksList);
}
x();

//const getCards = require('./js/tab');
if (!isShowWelcomePopup) {
  setTimeout(showWelcomePopup, 3000);
}
