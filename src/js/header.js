import { refs } from './refer';

function showMobileMenu() {
  refs.modalHeader.classList.add('is-shown-menu-header');
  document.addEventListener('keydown', onEscPress);
  refs.modalHeader.addEventListener('click', onBackdropClick);
  refs.modalHeaderCloseBtn.addEventListener('click', hideMobileMenu);
  refs.mobileNavLinks.addEventListener('click', onNavClick);
  document.body.classList.add('no-scroll');
}

function hideMobileMenu() {
  refs.modalHeader.classList.remove('is-shown-menu-header');
  document.removeEventListener('keydown', onEscPress);
  refs.modalHeader.removeEventListener('click', onBackdropClick);
  refs.modalHeaderCloseBtn.removeEventListener('click', hideMobileMenu);
  refs.mobileNavLinks.removeEventListener('click', onNavClick);
  document.body.classList.remove('no-scroll');
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

function onNavClick(e) {
  if (e.target.tagName === 'A') {
    hideMobileMenu();
  }
}

refs.headerBurger.addEventListener('click', showMobileMenu);
