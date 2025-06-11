// Імпорт необхідних функцій та посилань
import { getArtistCard } from './artists-api.js'; // Функція для отримання даних артиста з API
import { createArtistCard } from './markup-art-detail-functions.js'; // Функція для створення HTML-розмітки картки артиста
import { refs } from './refer.js'; // Об'єкт з посиланнями на DOM-елементи

// Функція для відображення індикатора завантаження
function showLoader() {
  refs.artistDetailLoader.classList.remove('visually-hidden');
}

// Функція для приховання індикатора завантаження
function hideLoader() {
  refs.artistDetailLoader.classList.add('visually-hidden');
}

// Функція для блокування прокручування сторінки при відкритті модального вікна
function blockScroll() {
  refs.body.style.overflow = 'hidden';
}

// Функція для відновлення прокручування сторінки
function unblockScroll() {
  refs.body.style.overflow = '';
}

// Функція для обробки натискання клавіші Escape (закриття модалки)
function onEscPress(e) {
  if (e.key === 'Escape') {
    closeArtistModal();
  }
}

// Функція для обробки кліку на бекдроп (закриття модалки)
function onBackdropClick(e) {
  if (e.target === refs.artistModal) {
    closeArtistModal();
  }
}

/**
 * Відкриває модальне вікно артиста та завантажує його дані
 * @param {string} id - ID артиста
 * @param {Array} genres - Масив жанрів артиста
 */
export function openArtistModal(id, genres) {
  refs.artistModal.classList.add('is-open'); // Відкриваємо модалку
  blockScroll(); // Блокуємо прокрутку
  showLoader(); // Показуємо лоадер

  // Додаємо обробники подій
  document.addEventListener('keydown', onEscPress);
  refs.artistModal.addEventListener('click', onBackdropClick);
  refs.artistModalCloseBtn.addEventListener('click', closeArtistModal);

  // Асинхронна функція для завантаження даних артиста
  async function fetchArtistDetails() {
    try {
      const artistData = await getArtistCard(id); // Отримуємо дані артиста
      artistData.genres = genres; // Додаємо жанри до даних
      createArtistCard(artistData, genres); // Створюємо картку артиста
    } catch (error) {
      console.error('Помилка при завантаженні даних артиста:', error);
      // Показуємо повідомлення про помилку
      refs.artistInfoElm.innerHTML = `
        <p class="error-msg">Не вдалося завантажити дані артиста. Спробуйте пізніше.</p>
      `;
    } finally {
      hideLoader(); // Ховаємо лоадер
    }
  }

  fetchArtistDetails(); // Викликаємо функцію завантаження
}

/** Закриває модальне вікно артиста */
export function closeArtistModal() {
  refs.artistModal.classList.remove('is-open'); // Закриваємо модалку
  // Видаляємо обробники подій
  document.removeEventListener('keydown', onEscPress);
  refs.artistModal.removeEventListener('click', onBackdropClick);
  refs.artistModalCloseBtn.removeEventListener('click', closeArtistModal);
  refs.artistInfoElm.innerHTML = ''; // Очищаємо вміст
  unblockScroll(); // Відновлюємо прокрутку
}
