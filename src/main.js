import getHeadphones from './js/service/get-headphones.js';
import { isShowWelcomePopup, showWelcomePopup } from './js/pup.js';

import tabs from './js/tab.js';
const cardInfoWatchesList = [
  {
    image: 'image 15.png',
    cardTitle: 'Безпроводные наушники №456',
    reviews: 100,
    price: 32,
  },
  {
    image: 'image 16.png',
    cardTitle: 'Безпроводные наушники №981',
    reviews: 130,
    price: 95,
  },
  {
    image: 'image 13.png',
    cardTitle: 'Безпроводные наушники №330',
    reviews: 88,
    price: 1223,
  },
];

//import { tab } from './js/tab.js';
import scss from './scss/main.scss';
import { menu } from './js/menu.js';
import Header from './js/sections/header.js';

const header = new Header('header');
header.setTemplate();
header.createHeader('body');
menu();

const tabSellersNames = ['Top Picks', 'Watches'];
const tabEarphonesNames = ['Earbuds', 'Wireless', 'Wired'];
tabs(tabSellersNames, [cardInfoWatchesList, cardInfoWatchesList], '.top-sell');
tabs(
  tabEarphonesNames,
  [cardInfoWatchesList, cardInfoWatchesList, cardInfoWatchesList],
  '.trend'
);

//const getCards = require('./js/tab');
if (!isShowWelcomePopup) {
  setTimeout(showWelcomePopup, 3000);
}
