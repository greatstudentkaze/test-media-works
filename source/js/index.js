const authPopup = () => {
  const loginButton = document.querySelector('.js-login-button');
  const overlay = document.querySelector('.overlay'),
    popup = overlay.querySelector('.popup');

  const openPopup = () => {
    overlay.classList.add('overlay--active');
    setTimeout(() => popup.classList.add('popup--active'), 200);
    document.body.classList.add('page__body--no-scroll');
  };

  const closePopup = () => {
    popup.classList.remove('popup--active');
    setTimeout(() => {
      overlay.classList.remove('overlay--active');
      document.body.classList.remove('page__body--no-scroll');
    }, 400);
  };

  loginButton.addEventListener('click', openPopup);
  overlay.addEventListener('click', evt => {
    const target = evt.target;
    const isOutsidePopup = !target.closest('.popup');
    const isCloseButton = target.closest('.popup__close');

    if (isOutsidePopup || isCloseButton) {
      closePopup();
    }
  });
};

const menu = () => {
  const menu = document.querySelector('.main-nav');

  document.addEventListener('click', evt => {
    const target = evt.target;
    const isMenuButton = target.closest('.js-menu-btn');
    const isOutsideMenu = !target.closest('.main-nav');

    if (isMenuButton) {
      menu.classList.toggle('main-nav--opened');
    } else if (isOutsideMenu) {
      menu.classList.remove('main-nav--opened');
    }
  });
};

menu();
authPopup();
