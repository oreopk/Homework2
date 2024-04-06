import getHeadphones from './js/service/get-headphones.js';
import { isShowWelcomePopup, showWelcomePopup } from './js/pup.js';

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
import Discover from './js/sections/discover.js';
import Wireless from './js/sections/wireless.js';
import TopSell from './js/sections/topsell.js';
import Trendings from './js/sections/trendings.js';
import Launches from './js/sections/launches.js';
import Footer from './js/sections/footer.js';
const header = new Header('header');
const discover = new Discover('container', 'top');
const wireless = new Wireless('product');
const topsell = new TopSell('top_sell');
const trendings = new Trendings('trendings');
const launches = new Launches('new');
const footer = new Footer('footer');

new Promise((res) => {
  header.setTemplate();
  header.createHeader('body');
  res();
})
  .then(() => {
    footer.setTemplate();
    footer.createFooter('main');
  })
  .then(() => {
    launches.setTemplate();
    launches.createLaunches('main');
  })

  .then(() => {
    document
      .querySelector('main')
      .insertAdjacentHTML(
        'afterbegin',
        '<h2 class="NewLaunches">New <br />Launches</h2>'
      );
  })
  .then(async () => {
    trendings.setTemplate();
    await trendings.createTrendings('main');
  })

  .then(async () => {
    topsell.setTemplate();
    await topsell.createTopsell('main');
  })

  .then(() => {
    menu();
  })
  .then(() => {
    if (!isShowWelcomePopup) {
      setTimeout(showWelcomePopup, 3000);
    }
  })
  .then(() => {
    wireless.setTemplate();
    wireless.createWireless('main');
  })
  .then(() => {
    discover.setTemplate();
    discover.createDiscover('main');
  });

//getHeadphones();
// //import tabs from './js/tab.js';
// const tabSellersNames = ['Top Picks', 'Watches'];
// const tabEarphonesNames = ['Earbuds', 'Wireless', 'Wired'];
// tabs(tabSellersNames, [cardInfoWatchesList, cardInfoWatchesList], '.top-sell');
// tabs(
//   tabEarphonesNames,
//   [cardInfoWatchesList, cardInfoWatchesList, cardInfoWatchesList],
//   '.trend'
// );

//const getCards = require('./js/tab');
