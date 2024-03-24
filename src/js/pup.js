const popup = document.createElement('section');
const WELCOME_POPUP_KEY = 'WELCOME_POPUP_KEY';

export const isShowWelcomePopup = JSON.parse(
  localStorage.getItem(WELCOME_POPUP_KEY)
); // true/false

export function showWelcomePopup() {
  const content = `
                <!-- welcome popup -->
                
                    <div class="welcome-popup">
                        <div class="welcome-popup__wrapper">
                            <p>Привет, добро пожаловать на маркетплейс!</p>
                            <button class="welcome-popup__button button_buy_now">Закрыть и не показывать больше</button>
                        </div>
                    </div>
                 `;

  popup.insertAdjacentHTML('afterbegin', content);

  document.body.append(popup);
  document.body.style.overflow = 'hidden';

  const closebutton = document.querySelector('.welcome-popup__button');

  closebutton.addEventListener('click', (event) => {
    localStorage.setItem(WELCOME_POPUP_KEY, JSON.stringify(true));
    popup.replaceWith('');
    document.body.style.overflow = 'auto';
  });
}

//localStorage.clear();
