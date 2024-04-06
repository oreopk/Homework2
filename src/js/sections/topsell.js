import ElemHTML from '../elem-html.js';
import star6 from '../../png/Star6.png';
import image13 from '../../png/image 13.png';
import image12 from '../../png/image 12.png';
import image14 from '../../png/image 14.png';
import arrow from '../../png/Arrows.png';
import getSellers from '../service/get-sellers.js';
import getHeadphones from '../../js/service/get-headphones.js';
import {
  cardInfoTopPicksList,
  cardInfoWatchesList,
} from '../data/tabs-card.js';
const tabSellersNames = ['Top Picks', 'Watches'];
import tabs from '../tabs.js';
class TopSell extends ElemHTML {
  elem = document.createElement('section');
  constructor(classes = '') {
    super();
    this.classes = classes;
  }
  setTemplate() {
    this.elem.classList.add(this.classes);
    this.elem.insertAdjacentHTML(
      'afterbegin',
      ` 
      <div class="sell_container container">
      <span class="top_sellers_span">Top Sellers</span>

      <div class="btns_sell">
        <button class="btn_top_picks">Top Picks</button>
        <button class="btn_top_picks">Watches</button>
      </div>

      <div class="topsell_headphoness">
        <div class="headphones">
          <div class="headphones1_inside inside">
            <img
              class="img1 img_sell1 img_sell"
              src="${image12}"
              alt=""
            />
            <div class="skidka60 skidka">
              <p class="p_skidka">Save 60 <br />%</p>
            </div>
            <div class="price_sell">
              <p class="p_price">Boat Rockerz 333</p>
              <div class="sell_rew">
                <div class="star_red">
                  <img src="${star6}" alt="" />
                  <img src="${star6}" alt="" /> 
                   <img src="${star6}" alt="" /> 
                   <img src="${star6}" alt="" /> 
                    <img src="${star6}" alt="" />
                </div>
                <p class="p_reviews">75 Reviews</p>
              </div>
              <p class="p_price_sell">$20</p>
            </div>
          </div>
          <button class="btn_add_sells">Add to cart</button>
        </div>
        <div class="headphones">
          <div class="headphones2_inside inside">
            <img
              class="img1 img_sell2 img_sell"
              src="${image13}"
              alt=""
            />
            <div class="price_sell">
              <p class="p_price">Boat kerz 234</p>
              <div class="sell_rew">
                <div class="star_red">
                <img src="${star6}" alt="" />
                <img src="${star6}" alt="" /> 
                 <img src="${star6}" alt="" /> 
                 <img src="${star6}" alt="" /> 
                  <img src="${star6}" alt="" />
                </div>
                <p class="p_reviews">75 Reviews</p>
              </div>
              <p class="p_price_sell">$20</p>
            </div>
          </div>
          <button class="btn_add_sells">Add to cart</button>
        </div>
        <div class="headphones">
          <div class="headphones3_inside inside">
            <img
              class="img1 img_sell3 img_sell"
              src="${image14}"
              alt=""
            />
            <div class="skidka40 skidka">
              <p class="p_skidka">Save 40 <br />%</p>
            </div>
            <div class="price_sell">
              <p class="p_price">Boat Rockerz 323</p>
              <div class="sell_rew">
                <div class="star_red">
                <img src="${star6}" alt="" />
                <img src="${star6}" alt="" /> 
                 <img src="${star6}" alt="" /> 
                 <img src="${star6}" alt="" /> 
                  <img src="${star6}" alt="" />
                </div>
                <p class="p_reviews">75 Reviews</p>
              </div>
              <p class="p_price_sell">$20</p>
            </div>
          </div>
          <button class="btn_add_sells">Add to cart</button>
        </div>
        <img class="Arrow" src="${arrow}" alt="" />
      </div>
    </div>
        `
    );
  }
  async createTopsell(place) {
    this.topPicks = await getSellers();
    this.render(place);
    tabs(tabSellersNames, this.topPicks, '.sell_container');
  }
}

export default TopSell;
