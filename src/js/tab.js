const cardInfoTopPicksList = [
  {
    image: 'image 14.png',
    cardTitle: 'Безпроводные наушники №1',
    reviews: 100,
    price: 32,
  },
  {
    image: 'image 13.png',
    cardTitle: 'Безпроводные наушники №2',
    reviews: 130,
    price: 95,
  },
  {
    image: 'image 12.png',
    cardTitle: 'Безпроводные наушники №3',
    reviews: 88,
    price: 123,
  },
];
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

// "beforebegin" – вставить html непосредственно перед elem,
// "afterbegin" – вставить html в начало elem,
// "beforeend" – вставить html в конец elem,
// "afterend" – вставить html непосредственно после elem.
// mobilemenu.insertAdjacentHTML('afterbegin', input)
// mobilemenu.remove('afterbegin', input)

// mobilemenu.append(div)
// mobilemenu.prepend(div)
// mobilemenu.before(div)
// mobilemenu.after(div)
// mobilemenu.replaceWith(div)

const sellersTabCardWrapper = document
  .querySelector('.main')
  .querySelectorAll('.topsell_headphoness');
// const earphonesTabCardWrapper = document
//   .querySelector('.earphones')
//   .querySelector('.tab__card-wrapper');

const sellersTabBtnWrapper = document
  .querySelector('main')
  .querySelectorAll('.btns_sell');

function getCards(cardInfoList, elem) {
  const arr = cardInfoList.forEach((cardInfo) => {
    const tab = `<div class="headphones">
    <div class="headphones1_inside inside">
      <img class="img1 img_sell1 img_sell" src="../src/png/${cardInfo.image}" alt="">
      <div class="skidka60 skidka"><p class="p_skidka">Save 60 <br>%</p></div>
      <div class="price_sell">
        <p class="p_price">${cardInfo.cardTitle}</p>
        <div class="sell_rew">
        <div class="star_red">
        <img src="../src/png/Star 6.png" alt="">
        <img src="../src/png/Star 6.png" alt="">
        <img src="../src/png/Star 6.png" alt="">
        <img src="../src/png/Star 6.png" alt="">
        <img src="../src/png/Star 6.png" alt="">
      </div>
      <p class="p_reviews">${cardInfo.reviews}</p>
    
       </div>
      <p class="p_price_sell">$${cardInfo.price}</p>
    </div>
    </div>
    <button class="btn_add_sells">Add to cart</button>
  </div>`;

    elem.insertAdjacentHTML('beforeend', tab);
  });
}

function deletetab() {
  const tabs = document.querySelector('.trend').querySelectorAll('.headphones');
  // console.log(tabs);
  for (x of tabs) {
    x.remove();
  }
}
f = sellersTabBtnWrapper[1];
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
    deletetab();
    getCards(cardInfoTopPicksList, sellersTabCardWrapper[1]);
  } else {
    deletetab();
    getCards(cardInfoWatchesList, sellersTabCardWrapper[1]);
  }
});

f1 = sellersTabBtnWrapper[0];
f1.addEventListener('click', (event) => {
  const target = event.target;

  const ovalButtons = f1.querySelectorAll('.btn_top_picks');

  ovalButtons.forEach((btn) => {
    btn.classList.remove('active');
  });
  console.log(target.nodeName);
  if (target.nodeName == 'BUTTON') {
    target.classList.add('active');
    // sellersTabCardWrapper.replaceWith('')
  }
  if (target.innerText == 'Watches') {
    getCards(cardInfoTopPicksList, sellersTabCardWrapper[0]);
  } else {
    getCards(cardInfoWatchesList, sellersTabCardWrapper[0]);
  }
});

//etCards(cardInfoTopPicksList, sellersTabCardWrapper);
// getCards(cardInfoList,earphonesTabCardWrapper)
