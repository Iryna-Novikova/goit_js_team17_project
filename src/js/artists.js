
import { refs } from './refer.js';
import { createArtistsList } from './markup-artists-functions.js';
import { hideLoadMoreBtn, showLoaderArtist, showLoadMoreBtn, hideLoaderArtist } from './show-hide-functions.js';
import { openArtistModal } from './artists-api.js'; 
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
  const card = e.target.closest('.artists-card');
  if (!card) return; 
  const learnMoreBtn = card.querySelector('.learn-more-btn');
  if (!learnMoreBtn || !learnMoreBtn.contains(e.target)) {
    return; 
  }

  const artistId = learnMoreBtn.dataset.id;
  if (!artistId) {
    console.warn('Не знайдено data-id на кнопці "Learn More"');
    return;
  }

  const artist = allArtists.find(item => item._id === artistId);
  if (!artist) {
    console.warn(`Артиста з ID "${artistId}" не знайдено у завантажених даних.`);
    return;
  }

  openArtistModal(artist);
  
});


