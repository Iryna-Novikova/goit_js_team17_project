import { fetchArtists } from './artists-api.js';
import { renderArtists, clearArtistsList} from './render-functions.js';
import { refs } from './refer.js';

let currentPage = 1;
const limit = 8;
let totalArtists = 0;

async function loadArtists(page = 1) {
  try {
    const data = await fetchArtists(page, limit);
    totalArtists = data.totalArtists;
    
    if (page === 1) {
      clearArtistsList();
    }
    
    renderArtists(data.artists);
    toggleLoadMoreButton();
  } catch (error) {
    console.error('Failed to load artists:', error);
  }
}

function toggleLoadMoreButton() {
  const loadedArtistsCount = refs.artistsList.children.length;
  refs.loadMoreBtn.style.display = loadedArtistsCount >= totalArtists ? 'none' : 'block';
}

refs.loadMoreBtn.addEventListener('click', () => {
  currentPage += 1;
  loadArtists(currentPage);
});


//refs.artistsList.addEventListener('click', e => {
//    const btn = e.target.closest('.learn-more-btn');
//    if (!btn) return;
//
//    const artistId = btn.dataset.id;
//    if (!artistId) return;
//
//    openArtistModal(artistId)
//
//}); 


loadArtists(currentPage);