export const cardInfoTopPicksList = [
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
export const cardInfoWatchesList = [
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

export const sellersTabCardWrapper = document
  .querySelector('.top-sell')
  .querySelectorAll('.topsell_headphoness');
// const earphonesTabCardWrapper = document
//   .querySelector('.earphones')
//   .querySelector('.tab__card-wrapper');
export const sellersTabCardWrapper2 = document
  .querySelector('.trend')
  .querySelectorAll('.topsell_headphoness');

export const sellersTabBtnWrapper = document
  .querySelector('.top-sell')
  .querySelectorAll('.btns_sell');
export const sellersTabBtnWrapper2 = document
  .querySelector('.trend')
  .querySelectorAll('.btns_sell');
export function getCards(cardInfoList, elem) {
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

export function deletetab(m) {
  const tabs = document.querySelector(`.${m}`).querySelectorAll('.headphones');
  // console.log(tabs);
  for (let x of tabs) {
    x.remove();
  }
}

//etCards(cardInfoTopPicksList, sellersTabCardWrapper);
// getCards(cardInfoList,earphonesTabCardWrapper)
