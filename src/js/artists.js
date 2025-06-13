import { refs } from './refer.js';
import { createArtistsList } from './markup-artists-functions.js';
import { showLoadMoreBtn, hideLoadMoreBtn,  showLoaderArtists,  hideLoaderArtists } from './show-hide-functions.js';
import { getArtists } from './artists-api.js';
import { openArtistModal } from './artist-detail-modal';
import { showAlert } from './info-message.js';

let currentPage = 1;
const limit = 1;
let totalPages;

loadArtistsList();

async function loadArtistsList () {
  try {
      hideLoadMoreBtn();
      showLoaderArtists();
        const data = await getArtists(currentPage, limit);
        const newArtists = data.artists;
        const totalFetchedArtists = data.totalArtists;

        createArtistsList(newArtists);
        totalPages = Math.ceil (totalFetchedArtists / limit);
        if (currentPage < totalPages) {
          showLoadMoreBtn();
          currentPage++;
        } else {
          hideLoadMoreBtn();
        }
    } catch (error) {
    refs.artistsListElm.innerHTML = `Помилка завантаження артистів: ${error}`
  };
      hideLoaderArtists();
}

function hndLoadMoreClick() {
  loadArtistsList();
}

refs.loadMoreBtnElm.addEventListener('click', hndLoadMoreClick);
refs.artistsListElm.addEventListener('click', e => {
  const learnMoreBtn = e.target.closest('.learn-more-btn');
  if (!learnMoreBtn) {
    return;
  }
  const artistId = learnMoreBtn.dataset.id;
  if (!artistId) {
    const message = 'Не знайдено data-id на кнопці "Learn More"'; 
    showAlert(message);
    return;
  }
  openArtistModal(artistId);
});
