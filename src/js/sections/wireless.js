import ElemHTML from '../elem-html.js';

import Rectangle15 from '../../png/Rectangle 15.png';
import Rectangle16 from '../../png/Rectangle 16.png';
import Rectangle17 from '../../png/Rectangle 17.png';

class Wireless extends ElemHTML {
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
      <div class="prod container">
      <div class="product_left">
        <div class="product_top_left">
          <p class="product_text">Apple wireless Airpod</p>
        </div>
        <div class="product_bottom_left">
          <button class="but_img">
            <img class="img0" src="${Rectangle15}" alt="" />
          </button>
          <button class="product_headphones but_img">
            <img class="img0" src="${Rectangle16}" alt="" />
            <p class="Price">
              Price: <span class="price_dollar">$45.99</span>
            </p>
          </button>
          <button class="but_img">
            <img class="img0" src="${Rectangle17}" alt="" />
          </button>
        </div>
      </div>
      <div class="product_right">
        <p class="Our_product">Our Features Products</p>
        <p class="Product_lorem">
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a product
        </p>
        <div class="add">
          <button class="button_add_to_cart">
            <span class="span_add_to_cart">Add to cart</span>
          </button>
          <button class="button_view_more">
            <span class="span_view_more">View more</span>
          </button>
        </div>
      </div>
    </div>
        `
    );
  }
  createWireless(place) {
    this.render(place);
  }
}

export default Wireless;
