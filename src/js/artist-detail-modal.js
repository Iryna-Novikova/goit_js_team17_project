/**
 * Імпорт необхідних модулів:
 * - API-функція для отримання даних артиста
 * - Функція для створення розмітки картки артиста
 * - Референси DOM-елементів
 * - Функції для показу/приховування лоадера
 */
import { getArtistCard } from './artists-api.js';
import { createArtistCard } from './markup-art-detail-functions.js';
import { refs } from './refer.js';
import { showLoaderModal, hideLoaderModal } from './show-hide-functions.js';

/**
 * Блокує прокрутку сторінки при відкритті модалки
 */
function blockScroll() {
  refs.body.style.overflow = 'hidden';
}

/**
 * Відновлює прокрутку сторінки
 */
function unblockScroll() {
  refs.body.style.overflow = '';
}

/**
 * Обробник натискання клавіші Escape для закриття модалки
 * @param {KeyboardEvent} e - Об'єкт події клавіатури
 */
function onEscPress(e) {
  if (e.key === 'Escape') {
    closeArtistModal();
  }
}

/**
 * Обробник кліку на бекдроп модального вікна
 * @param {MouseEvent} e - Об'єкт події миші
 */
function onBackdropClick(e) {
  if (e.target === refs.artistsModalBackdrop) {
    closeArtistModal();
    // закриття модального вікна при кліку на бекдроп
  }
}

/**
 * Обробник кліку на кнопку закриття модалки
 */
function onCloseBtnClck() {
  closeArtistModal();
}

/**
 * Відкриває модальне вікно з інформацією про артиста
 * @param {string} id - Ідентифікатор артиста
 */
export function openArtistModal(id) {
  refs.artistsModalBackdrop.classList.add('is-open');
  blockScroll();
  document.addEventListener('keydown', onEscPress);
  refs.artistsModalBackdrop.addEventListener('click', onBackdropClick);
  refs.artistsModalCloseBtn.addEventListener('click', onCloseBtnClck);
  fetchArtistDetails(id);
}

/**
 * Отримує дані артиста та створює розмітку картки
 * @param {string} id - Ідентифікатор артиста
 */
async function fetchArtistDetails(id) {
  showLoaderModal();
  try {
    const artistData = await getArtistCard(id);
    createArtistCard(artistData);
  } catch (error) {
    // Показуємо повідомлення про помилку завантаження
    refs.artistInfoElm.innerHTML = `
      <p class="error-msg">Artist info failed to load. Please try again later.</p>
    `;
  } finally {
    hideLoaderModal();
  }
}

/**
 * Закриває модальне вікно артиста
 */
export function closeArtistModal() {
  refs.artistsModalBackdrop.classList.remove('is-open');

  // Видаляємо всі обробники подій
  document.removeEventListener('keydown', onEscPress);
  refs.artistsModalBackdrop.removeEventListener('click', onBackdropClick);
  refs.artistsModalCloseBtn.removeEventListener('click', onCloseBtnClck);

  // Очищаємо вміст модалки
  refs.artistInfoElm.innerHTML = '';

  // Відновлюємо прокрутку сторінки
  unblockScroll();
}
