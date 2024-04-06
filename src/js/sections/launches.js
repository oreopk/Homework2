import ElemHTML from '../elem-html.js';

import image17 from '../../../src/png/image 17.png';
import image18 from '../../png/image 18.png';

class Launches extends ElemHTML {
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
      <div class="neww container">
      <div class="new_left">
        <button class="img20 img_left">
          <img class="img10" src="${image17}" alt="" />
        </button>
        <button class="img20">
          <img class="img10" src="${image18}" alt="" />
        </button>
      </div>
      <div class="new_right">
        <p class="new_product">Airdrop 500 Anc</p>
        <p class="new_lorem">
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a product ... Read More
        </p>
        <p class="new_Price">
          Price: <span class="new_dollar">$45.99</span>
        </p>
        <div class="circles">
          <button class="but_circle black"></button>
          <button class="but_circle yellow"></button>
          <button class="but_circle blue"></button>
        </div>
        <div class="add_new">
          <button class="newbut_to_cart button_add_to_cart">
            <span class="new_add_to_cart">Add to cart</span>
          </button>
          <button class="button_view_more">
            <span class="explore_more">Explore more</span>
          </button>
        </div>
      </div>
    </div>
        `
    );
  }

  createLaunches(place) {
    this.render(place);
  }
}

export default Launches;
