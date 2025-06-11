export const refs = {
  // header
  headerBurger: document.querySelector('[data-menu-open]'),
  modalHeaderCloseBtn: document.querySelector('.close-menu-btn'),

  modalHeader: document.querySelector('[data-menu]'), // мобільне меню
  logoLinkMenu: document.querySelector('.logo-link'), // логотип в моб. меню
  mobileNavLinks: document.querySelector('.mobile-nav-links'), // посилання в моб. меню

  // Artists Section
  artistsList: document.querySelector('[data-artist-gallery]'), // Список карток артистів
  loaderBtn: document.querySelector('[data-btn-load-more]'), // Кнопка "Load More"
  artistLoadEl: document.querySelector('[data-artist-loader]'),
  artistInfoElm: document.querySelector('[data-artist-info]'),

  // Artist Details Modal
  artistsModalBackdrop: document.querySelector('[data-artists-modal]'), // Модальне вікно
  artistsModalCloseBtn: document.querySelector('.artists-modal-close-btn'), // Кнопка закриття модального вікна

  // Feedback Section

  feedbackSliderPrevBtn: document.querySelector('.swiper-button-prev'), // Кнопки навігації слайдера
  feedbackSliderNextBtn: document.querySelector('.swiper-button-next'), // Кнопки навігації слайдера
  feedbackSliderPagination: document.querySelector('.swiper-pagination'), // Пагінація
  openFeedbackBtn: document.querySelector('.leave-feedback-btn'), // Кнопка відкриття форми фідбеку
  feedbackLoaderElm: document.querySelector('[data-feedback-loader]'),

  // Feedback Modal
  feedbackFormBackdrop: document.querySelector('[data-feedback-form]'), // Модалка з формою фідбеку
  feedbackFormEL: document.querySelector('.form-main'), // Форма для фідбеку
  feedbackFormCloseBtn: document.querySelector('.form-main-btn'), // Кнопка закриття модалки

  feedbackFormRatingContainer: document.querySelector('.form-str'), // Контейнер для рейтингу зірочками
  feedbackFormSubmitBtn: document.querySelector('.form-end-button'), // Кнопка відправки форми
};
