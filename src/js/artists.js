// робота з кнопками Load More, Learn more, дозавантаження 
// картинок, опрацювання повідомлень у разі помилкового запиту

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.artists-gallery');
  const loadMoreBtn = document.querySelector('[data-btn-load-more]');

  let currentPage = 1;
  const limit = 8; 
  let allArtists = []; 

  const API_URL = 'https://sound-wave.b.goit.study/api';

  async function fetchArtists() {
    try {
      const response = await fetch(`${API_URL}/artists`);
      if (!response.ok) throw new Error('Помилка мережі');

      const data = await response.json();
      allArtists = data.artists;

      gallery.innerHTML = '';
      currentPage = 1;

      renderArtists();
      checkLoadMoreVisibility();
    } catch (error) {
      console.error('❌ Помилка завантаження артистів:', error);
    }
  }

  function getShortBio(bio) {
    if (!bio) return 'No biography available.';
    const words = bio.split(' ');
    return words.length > 25 ? words.slice(0, 25).join(' ') + '...' : bio;
  }

  function renderArtists() {
    const startIndex = (currentPage - 1) * limit;
    const endIndex = currentPage * limit;
    const visibleArtists = allArtists.slice(startIndex, endIndex);

    const markup = visibleArtists.map(artist => `
      <li class="artist-list">
        <img src="${artist.strArtistThumb}" alt="${artist.strArtist}" />
        <div class="genres">
          ${artist.genres.map(genre => `<span class="genre">${genre}</span>`).join('')}
        </div>
        <h4 class="artist-name">${artist.strArtist}</h4>
        <p class="artist-info">${getShortBio(artist.strBiographyEN)}</p>
        <button class="learn-more" data-id="${artist._id}">Learn More
          <svg width="16" height="16" aria-hidden="true" fill="white">
            <use href="../img/icons.svg#icon-right-caret-learn-more"></use>
          </svg>
        </button>
      </li>
    `).join('');

    gallery.insertAdjacentHTML('beforeend', markup);
  }

  function checkLoadMoreVisibility() {
    if (currentPage * limit >= allArtists.length) {
      loadMoreBtn.classList.add('visually-hidden');
    } else {
      loadMoreBtn.classList.remove('visually-hidden');
    }
  }

  loadMoreBtn.addEventListener('click', () => {
    currentPage++;
    renderArtists();
    checkLoadMoreVisibility();
  });

  gallery.addEventListener('click', e => {
    const card = e.target.closest('.artist-list');
    if (!card) return;

    const learnMoreBtn = card.querySelector('.learn-more');
    const artistId = learnMoreBtn?.dataset.id;
    if (!artistId) return;

    const artist = allArtists.find(item => item._id === artistId);
    if (!artist) return;

    console.log('data-artists-modal', artist);
  });



  fetchArtists();
});


