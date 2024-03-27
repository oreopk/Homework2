import { isShowWelcomePopup, showWelcomePopup } from './js/pup.js';
import {
  cardInfoTopPicksList,
  cardInfoWatchesList,
  sellersTabCardWrapper,
  sellersTabCardWrapper2,
  sellersTabBtnWrapper,
  sellersTabBtnWrapper2,
  getCards,
  deletetab,
} from './js/tab.js';
import scss from './scss/main.scss';
import { menu } from './js/menu.js';
import Header from './js/sections/header.js';

const header = new Header('header');
header.setTemplate();
header.createHeader('body');
menu();
//const getCards = require('./js/tab');
if (!isShowWelcomePopup) {
  setTimeout(showWelcomePopup, 3000);
}
console.log(sellersTabBtnWrapper);
console.log(sellersTabBtnWrapper2);

let f = sellersTabBtnWrapper[0];
f.addEventListener('click', (event) => {
  const target = event.target;

  const ovalButtons = f.querySelectorAll('.btn_top_picks');

  ovalButtons.forEach((btn) => {
    btn.classList.remove('active');
  });
  console.log(target.nodeName);
  if (target.nodeName == 'BUTTON') {
    target.classList.add('active');
    // sellersTabCardWrapper.replaceWith('')
  }
  if (target.innerText == 'Watches') {
    deletetab('top-sell');
    getCards(cardInfoTopPicksList, sellersTabCardWrapper[0]);
  } else {
    deletetab('top-sell');
    getCards(cardInfoWatchesList, sellersTabCardWrapper[0]);
  }
});
