import { refs } from './refer.js';

export function createArtistCard(artist) {
  const {
    _id: id,
    strArtist: name,
    strArtistThumb: photo,
    genres = [],
    strBiographyEN: shortDescription,
  } = artist;

  const genresMarkup =
    `<ul class="artists-genres-list">` +
    genres.map(genre => `<li class="artists-genre-item">${genre}</li>`).join('') +
    `</ul>`;

  return `
    <li class="artists-card" data-id="${id}">
      <img src="${photo}" alt="${name}" class="artist-photo" />
      <h4 class="artists-name epilogue">${name}</h4>
      ${genresMarkup}
      <p class="artists-description">
        ${shortDescription ? shortDescription.slice(0, 90) + '...' : 'No description available.'}
      </p>
      <button class="learn-btn" data-id="${id}" type="button">
        <span class="learn-more-text">Learn More</span>
        <svg class="learn-more-icon" viewBox="0 0 31 32">
          <use href="./img/icons.svg#icon-right-caret-learn-more"></use>
        </svg>
      </button>
    </li>
  `;
}
export function renderArtists(artistArray) {
    const markup = artistArray.map(createArtistCard).join('');
    refs.artistsList.insertAdjacentHTML('beforeend', markup);
}

export function clearArtistsList() {
    refs.artistsList.innerHTML = '';
}
