// тут мають бути фннкції по розмітці карток артистів для секції артисти. 
import { refs } from './refer.js';
import icon from './img/icons.svg';

function createArtistCard(artist) {
  const {
    _id: id,
    strArtist: name,
    strArtistThumb: photo,
    genres = [],
    strBiographyEN: shortDescription,
  } = artist;

  const genresMarkup =
    `<ul class="artists-genres-list">` +
    genres.map(genre => `<li class="artists-genre-item">${genre}</li>`).join(' ') +
    `</ul>`;

  const descriptionText = shortDescription
    ? shortDescription.slice(0, 60) + '...' : 'No description available.';
  
  // const genresString = encodeURIComponent(JSON.stringify(genres));
  
  return `
    <li class="artists-card">
      <img src="${photo}" alt="${name}" class="artist-photo" />
      ${genresMarkup}
      <h4 class="artists-name epilogue">${name}</h4>
      <p class="artists-description">${descriptionText}</p>
      <button class="learn-more-btn" data-id="${id}" type="button">
        <span class="learn-more-text">Learn More</span>
        <svg class="learn-more-icon" viewBox="0 0 31 32" width="24" height="25">
          <use href="${icon}#icon-right-caret-learn-more"></use>
        </svg>
      </button>
    </li>
  `;
}

export function createArtistsList(artistArray) {
  const markup = artistArray.map(createArtistCard).join('');
  refs.artistsListElm.insertAdjacentHTML('beforeend', markup);
}

export function clearArtistsList() {
  refs.artistsListElm.innerHTML = '';
}
