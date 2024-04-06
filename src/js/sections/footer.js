import ElemHTML from '../elem-html.js';
import facebook from '../../png/001-facebook.png';
import inst from '../../png/004-instagram.png';
import twit from '../../png/003-twitter.png';
class Footer extends ElemHTML {
  elem = document.createElement('footer');
  constructor(classes = '') {
    super();
    this.classes = classes;
  }
  setTemplate() {
    this.elem.classList.add(this.classes);
    this.elem.insertAdjacentHTML(
      'afterbegin',
      ` 
      <div class="foot container">
      <div class="get_started">
        <p class="Ready_p">Ready to get started</p>
        <button class="starter_btn button_add_to_cart">
          <span class="span_started new_add_to_cart">Get Started</span>
        </button>
      </div>
      <div class="line"></div>
      <div class="other">
        <div class="1">
          <p class="sub_text">
            Subscribe to our <br />
            Website
          </p>
          <div class="email">
            <input
              class="email_input"
              type="text"
              placeholder="Email address"
            />
          </div>
        </div>
        <div class="all_navs">
          <div class="2">
            <nav class="last_nav">
              <a class="nav_end_text green" href="">Services</a>
              <a class="nav_end_text" href="">Email Marketing</a>
              <a class="nav_end_text" href="">Campaing</a>
              <a class="nav_end_text" href="">Branding</a>
              <a class="nav_end_text" href="">Offline</a>
            </nav>
          </div>
          <div class="3">
            <nav class="last_nav">
              <a class="nav_end_text green" href="">About</a>
              <a class="nav_end_text" href="">Our Story</a>
              <a class="nav_end_text" href="">Benefits </a>
              <a class="nav_end_text" href="">Team</a>
              <a class="nav_end_text" href="">Careers</a>
            </nav>
          </div>
          <div class="4">
            <nav class="last_nav">
              <a class="nav_end_text green" href="">Help</a>
              <a class="nav_end_text" href="">FAQs</a>
              <a class="nav_end_text" href="">Contact Us</a>
            </nav>
          </div>
        </div>
      </div>
      <div class="last">
        <div class="term">
          <p class="policy">Terms & Conditions</p>
          <p class="policy">Privacy Policy</p>
        </div>
        <div class="social">
          <img src="${facebook}" alt="" />
          <img src="${inst}" alt="" />
          <img src="${twit}" alt="" />
        </div>
      </div>
    </div>
        `
    );
  }
  createFooter(place) {
    this.render(place);
  }
}

export default Footer;
