// тут потрібно створити об'єкт refer усіх елементів документу.
//  Приклади були в лекціях викладача.

// Приклад використання "import { refs } from '../js/refer.js';" наприклад, додати слухач на поле пошуку refs.searchInput.addEventListener('input', ()=>{});

export const refs = {
  // header
  openMobileMenuBtnEl: document.querySelector('.burger-btn'),
  closeMobileMenuBtnEl: document.querySelector('.close-menu-btn'),

  mobileMenu: document.querySelector('.mobile-menu'), // мобільне меню
  logoLinkMenu: document.querySelector('.logo-link'), // логотип в моб. меню
  mobileNavLinks: document.querySelector('.mobile-nav-links'), // посилання в моб. меню

  // hero
  heroBtnEl: document.querySelector('.hero-nav-btn'), // кнопка "Explore Artists"

  // Artists Section

  artistsList: document.querySelector('.artists-gallery'), // Список карток артистів
  leanMoreBtn: document.querySelector('.learn-more-btn'), // Кнопка "Learn More" на картці артиста
  loadMoreBtn: document.querySelector('.load-more'), // Кнопка "Load More"

  // Artist Details Modal
  artistsModalBackdrop: document.querySelector('[data-artists-modal]'), // Модальне вікно
  artistsModalCloseBtn: document.querySelector('.artists-modal-close-btn'), // Кнопка закриття модального вікна
  artistsModalContentWrapper: document.querySelector(
    '.artist-modal-content-wrapper'
  ), // Контейнер, куди вставлятиметься контент модалки

  // Feedback Section

  feedbackSliderContainer: document.querySelector('.mySwiper'), // Контейнер Swiper
  feedbackSliderPrevBtn: document.querySelector('.swiper-button-prev'), // Кнопки навігації слайдера
  feedbackSliderNextBtn: document.querySelector('.swiper-button-next'), // Кнопки навігації слайдера
  feedbackSliderPagination: document.querySelector('.swiper-pagination'), // Пагінація
  openFeedbackBtn: document.querySelector('.leave-feedback-btn'), // Кнопка відкриття форми фідбеку

  // Feedback Modal
  feedbackFormBackdrop: document.querySelector('[data-feedback-form]'), // Модалка з формою фідбеку
  feedbackFormEL: document.querySelector('.form-main'), // Форма для фідбеку
  feedbackFormCloseBtn: document.querySelector('.form-main-btn'), // Кнопка закриття модалки

  feedbackFormRatingContainer: document.querySelector('.form-str'), // Контейнер для рейтингу зірочками
  feedbackFormSubmitBtn: document.querySelector('.form-end-button'), // Кнопка відправки форми
};
