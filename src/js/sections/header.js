import ElemHTML from '../elem-html.js';

class Header extends ElemHTML {
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
        <div class="header_content container">
            
        <a class="logo_button" href="">
          Shop<span class="logo_button_span">per</span>
        </a>
        
        <div class="search">
          <input
            class="search_input"
            type="text"
            placeholder="Search"
          />
        
        </div>
        <button class="button_add">
        <span class="span_add">  0 items Added </span> 
        </button>
        
        <button class="button_login">
          <span class="span_login">Login or Sign Up</span>
        </button>
        <button class="menu_button"><hr></button>
        </div>
        </div>
        
        
        <nav class="nav_menu ">
        <div class="div_nav container">
        <a class="nav_a" href="#features">Features</a>
        <a class="nav_a" href="#product">Products</a>
        <a  class="nav_a" href="#top_sell">Blog</a>
        <a class="nav_a" href="#new">About</a>
        </nav>
        </div>
        `
    );
    console.log('PROVERKA');
  }
  createHeader() {
    this.render();
  }
}

export default Header;
