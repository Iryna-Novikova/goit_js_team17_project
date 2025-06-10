
import { refs } from './refer.js';
import { createArtistsList } from './markup-artists-functions.js';
import { hideLoadMoreBtn, showLoaderArtist, showLoadMoreBtn, hideLoaderArtist } from './show-hide-functions.js';
import { getArtist } from ''; 

let currentPage = 1;
const limit = 8;
let allArtists = []; 
let totalPages = 0; 

refs.loaderBtn.addEventListener('click', hndLoadMoreClick); 

async function hndLoadMoreClick() {
  try {
    hideLoadMoreBtn();
    showLoaderArtist();

    
    const data = await getArtist(currentPage, limit);
    const newArtists = data.artists; 
    allArtists = [...allArtists, ...newArtists]; 
    createArtistsList(newArtists); 
    const totalFetchedArtists = data.totalArtists; 
    totalPages = Math.ceil(totalFetchedArtists / limit); 
    if (currentPage < totalPages) {
      showLoadMoreBtn();
      currentPage++;
    } else {
      
      hideLoadMoreBtn();
    }

  } catch (error) {
    console.error('Помилка завантаження артистів:', error);
  } finally {
    hideLoaderArtist();
  }
}

refs.artistsList.addEventListener('click', e => {
  const card = e.target.closest('.artist-card'); 
  if (!card) return;

  const learnMoreBtn = card.querySelector('.learn-more');
  const artistId = learnMoreBtn?.dataset.id;
  if (!artistId) return;

  const artist = allArtists.find(item => item._id === artistId);
  if (!artist) {
    console.warn('Артиста не знайдено за ID:', artistId);
    return;
  }

  console.log('data-artists-modal', artist); 
});


