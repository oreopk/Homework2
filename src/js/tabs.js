import star6 from '../png/Star6.png';
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

// const sellersTabCardWrapper = document
//   .querySelector('.top-sell')
//   .querySelectorAll('.topsell_headphoness');
// // // const earphonesTabCardWrapper = document
// // //   .querySelector('.earphones')
// // //   .querySelector('.tab__card-wrapper');
// // export const sellersTabCardWrapper2 = document
// //   .querySelector('.trend')
// //   .querySelectorAll('.topsell_headphoness');

// const sellersTabBtnWrapper = document
//   .querySelector('.top-sell')
//   .querySelectorAll('.btns_sell');
import addtoCard from './service/add-to-cart.js';
export default function tabs(tabNames, dataCards, tabContainerElement) {
  // tabNames - string[]
  // dataCards - {
  //     cardTitle: string,
  //     reviews: number,
  //     price: number,
  // }[][]
  // tabContainerElement - Element | null

  if (!tabContainerElement) {
    return;
  }

  const tabCardWrapper = document
    .querySelector(`${tabContainerElement}`)
    .querySelector('.topsell_headphoness');
  const tabBtnWrapper = document
    .querySelector(`${tabContainerElement}`)
    .querySelector('.btns_sell');

  tabBtnWrapper.addEventListener('click', (event) => {
    const target = event.target;
    const emptyWrapper = document.createElement('div');
    emptyWrapper.classList.add('.topsell_headphoness');

    const ovalButtons = tabBtnWrapper.querySelectorAll('button');
    ovalButtons.forEach((btn) => {
      btn.classList.remove('active');
    });
    target.classList.add('active');

    tabNames.forEach((tab) => {
      if (tab == target.innerText) {
        deletetab(tabContainerElement);
        getCards(dataCards, tabCardWrapper);
      }
    });
  });
}
import image12 from '../png/image 12.png';
function getCards(cardInfoList, elem) {
  const arr = cardInfoList.forEach((cardInfo) => {
    const tab = `<div class="headphones">
    <div class="headphones1_inside inside">
      <img class="img1 img_sell1 img_sell" src="${image12}" alt="">
    <div class="skidka60 skidka"><p class="p_skidka">Save 60 <br>%</p></div>
      <div class="price_sell">
        <p class="p_price">${cardInfo.cardTitle}</p>
        <div class="sell_rew">
        <div class="star_red">
        <img src="${star6}" alt="">
        <img src="${star6}" alt="">
        <img src="${star6}" alt="">
        <img src="${star6}" alt="">
        <img src="${star6}" alt="">
      </div>
      <p class="p_reviews">${cardInfo.reviews}</p>
    
       </div>
      <p class="p_price_sell">${cardInfo.price}</p>
    </div>
    </div>
    <button class="btn_add_sells">Add to cart</button>
  </div>`;

    elem.insertAdjacentHTML('beforeend', tab);
  });
}

function deletetab(m) {
  const tabs = document.querySelector(`${m}`).querySelectorAll('.headphones');
  // console.log(tabs);
  for (let x of tabs) {
    x.remove();
  }
}

//etCards(cardInfoTopPicksList, sellersTabCardWrapper);
// getCards(cardInfoList,earphonesTabCardWrapper)
