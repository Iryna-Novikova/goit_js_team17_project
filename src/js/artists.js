import { refs } from './refer.js';
import { createArtistsList } from './markup-artists-functions.js';
import { showLoadMoreBtn, hideLoadMoreBtn,  showLoaderArtist,  hideLoaderArtist } from './show-hide-functions.js';
import { getArtist } from './artists-api.js'; 



let currentPage = 1;
const limit = 8;
let allArtists = []; 


async function hndLoadMoreClick() {
    try {
        hideLoadMoreBtn();
        showLoaderArtist();

        const data = await getArtist(currentPage, limit);
        const newArtists = data.artists;
        const totalFetchedArtists = data.totalArtists;

        allArtists = [...allArtists, ...newArtists];
        createArtistsList(newArtists);

        totalPages = Math.ceil(totalFetchedArtists / limit);

        if (currentPage < totalPages) {
            showLoadMoreBtn();
            currentPage++;
        } else {
            hideLoadMoreBtn();
        }

    } catch (error) {
        console.error('Помилка завантаження артистів:', error);
    } 
      hideLoaderArtist();
}

refs.loadMoreBtn.addEventListener('click', hndLoadMoreClick);

refs.artistsList.addEventListener('click', e => {
  const learnMoreBtn = e.target.closest('.learn-more-btn');
  if (!learnMoreBtn) {
    return;
  }

  const artistId = learnMoreBtn.dataset.id;
  if (!artistId) {
    console.warn('Не знайдено data-id на кнопці "Learn More"');
    return;
  }

  getArtist(artistId, dataset.genres);
});
