export default class ElemHTML {
  elem = document.createElement('div');
  setClasses(className = '') {
    this.elem.classList.add(className);
  }
  removeClasses(className = '') {
    this.elem.classList.remove(className);
  }
  render(container) {
    if (!container) {
      return;
    }
    document.querySelector(container).prepend(this.elem);
  }
  addInnerHTML(content) {
    if (!content) {
      return;
    }
    this.elem.insertAdjacentElement('beforebegin', content);
  }
}
