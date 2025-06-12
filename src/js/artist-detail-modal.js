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
    const genresList = genres.join(', ');
  }
}
function onCloseBtnClck() {
  closeArtistModal();
}
export function openArtistModal(id) {
  refs.artistsModalBackdrop.classList.add('is-open');
  blockScroll();
  document.addEventListener('keydown', onEscPress);
  refs.artistsModalBackdrop.addEventListener('click', onBackdropClick);
  refs.artistsModalCloseBtn.addEventListener('click', onCloseBtnClck);
  fetchArtistDetails(id);
}
async function fetchArtistDetails(id) {
  showLoaderModal();
  try {
    const artistData = await getArtistCard(id);
    createArtistCard(artistData);
  } catch (error) {
    console.error('Error loading artist data:', error);

    refs.artistInfoElm.innerHTML = `
        <p class="error-msg">Artist info failed to load. Please try again later.</p>
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
