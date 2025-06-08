const dataHeaderBurger = document.querySelector('.burger-btn');
const dataModalHeader = document.querySelector('.mobile-menu');
const dataBtnHeaderModalClose = document.querySelector('.modal-close');

dataHeaderBurger.addEventListener('click', () => {
  dataModalHeader.classList.add('is-shown');
});

dataBtnHeaderModalClose.addEventListener('click', () => {
  dataModalHeader.classList.remove('is-shown');
});
