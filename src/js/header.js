import { refer } from './refer';

function showMobileMenu() {
  refer.modalHeader.classList.add('is-shown');
  document.addEventListener('keydown', onEscPress);
  refer.modalHeader.addEventListener('click', onBackdropClick);
}

function hideMobileMenu() {
  refer.modalHeader.classList.remove('is-shown');
  document.removeEventListener('keydown', onEscPress);
  refer.modalHeader.removeEventListener('click', onBackdropClick);
}

function onEscPress(e) {
  if (e.key === 'Escape') {
    hideMobileMenu();
  }
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    hideMobileMenu();
  }
}

refer.headerBurger.addEventListener('click', showMobileMenu);
refer.modalHeaderCloseBtn.addEventListener('click', hideMobileMenu);
