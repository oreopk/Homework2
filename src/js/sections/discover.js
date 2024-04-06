import ElemHTML from '../elem-html.js';
import Ellipse9 from '../../svg/Ellipse 9.svg';
import Ellipse7 from '../../svg/Ellipse 7.svg';
import Ellipse11 from '../../svg/Ellipse 11.svg';
import Ellipse13 from '../../svg/Ellipse 13.svg';
import Ellipse21 from '../../svg/Ellipse 21.svg';
import image6 from '../../png/image 6.png';
import image11 from '../../png/image 11.png';
import Star1 from '../../svg/Star 1.svg';
class Discover extends ElemHTML {
  elem = document.createElement('section');
  constructor(classes = '', classes2 = '') {
    super();
    this.classes = classes;
    this.classes2 = classes2;
  }
  setTemplate() {
    this.elem.classList.add(this.classes);
    this.elem.classList.add(this.classes2);
    this.elem.insertAdjacentHTML(
      'afterbegin',
      ` 
      <div class="top_left">
      <p class="top_left_text">Discover Our<br />Latest Products</p>
      <p class="top_left_text_bot">
        Lorem ipsum is a placeholder text commonly used <br />to demonstrate
        the visual form of a product
      </p>
      <button class="button_buy_now">
        <span class="span_buy_now">Buy Now</span>
      </button>

      <div class="reviews">
        <div class="rew_icns">
          <img class="rew_icn1" src="${Ellipse9}" alt="" />
          <img class="rew_icn2" src="${Ellipse7}" alt="" />
          <img class="rew_icn3" src="${Ellipse11}" alt="" />
          <img class="rew_icn4" src="${Ellipse13}" alt="" />
        </div>
        <div class="span_div_reviews">
          <span class="span_reviews">15k Well<br />Reviews</span>
        </div>
      </div>
    </div>

    <div class="top-right">
      <div class="headphones_background">
        <img class="headphones_img" src="${image6}" alt="" />
        <img class="star_icn1" src="${Star1}" alt="" />
        <img class="star_icn2" src="${Star1}" alt="" />
        <button class="play_video_button">
          <img
            class="play_video_icn"
            src="${image11}"
            alt=""
          />
          <img
            class="play_video_icn2"
            src="${Ellipse21}"
            alt=""
          />
          <span class="play_video_button_text">Play video</span>
        </button>
      </div>
    </div>
        `
    );
  }
  createDiscover(place) {
    this.render(place);
  }
}

export default Discover;
