import { getArtistCard } from './artists-api.js';
import { createArtistCard } from './markup-art-detail-functions.js';
import { refs } from './refer.js';
import { showLoaderModal, hideLoaderModal } from './show-hide-functions.js';

function blockScroll() {
  refs.body.style.overflow = 'hidden';
}

function unblockScroll() {
  refs.body.style.overflow = '';
}

function onEscPress(e) {
  if (e.key === 'Escape') {
    closeArtistModal();
  }
}

function onBackdropClick(e) {
  if (e.target === refs.artistsModalBackdrop) {
    closeArtistModal();
  }
}
function onCloseBtnClck() {
  closeArtistModal();
}

export function openArtistModal(id, genres) {
  refs.artistsModalBackdrop.classList.add('is-open');
  blockScroll();
  document.addEventListener('keydown', onEscPress);
  refs.artistsModalBackdrop.addEventListener('click', onBackdropClick);
  refs.artistsModalCloseBtn.addEventListener('click', onCloseBtnClck);
  fetchArtistDetails(id, genres);
}

async function fetchArtistDetails(id, genres) {
  showLoaderModal();
  try {
    const artistData = await getArtistCard(id);
    createArtistCard(artistData, genres);
  } catch (error) {
    console.error('Помилка при завантаженні даних артиста:', error);

    refs.artistInfoElm.innerHTML = `
        <p class="error-msg">Не вдалося завантажити дані артиста. Спробуйте пізніше.</p>
      `;
  }
  hideLoaderModal();
}

export function closeArtistModal() {
  refs.artistsModalBackdrop.classList.remove('is-open');

  document.removeEventListener('keydown', onEscPress);
  refs.artistsModalBackdrop.removeEventListener('click', onBackdropClick);
  refs.artistsModalCloseBtn.removeEventListener('click', onCloseBtnClck);
  refs.artistInfoElm.innerHTML = '';
  unblockScroll();
}
