import { refer } from './refer';

function showModalHeader() {
  refer.modalHeader.classList.add('is-shown');
  document.addEventListener('keydown', onEscPress);
  refer.modalHeader.addEventListener('click', onBackdropClick);
}

function closeModalHeader() {
  refer.modalHeader.classList.remove('is-shown');
  document.removeEventListener('keydown', onEscPress);
  refer.modalHeader.removeEventListener('click', onBackdropClick);
}

function onEscPress(e) {
  if (e.key === 'Escape') {
    closeModalHeader();
  }
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    closeModalHeader();
  }
}

refer.headerBurger.addEventListener('click', showModalHeader);
refer.modalHeaderCloseBtn.addEventListener('click', closeModalHeader);
