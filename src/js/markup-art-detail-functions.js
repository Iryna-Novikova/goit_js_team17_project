import { refs } from './refer.js';

export function createArtistCard(artist) {
  const markup = artistCardMarkup(artist);
  refs.artistInfoElm.innerHTML = markup;
}

export function artistCardMarkup(artist) {
  const {
    strArtist: name,
    strArtistThumb: photo,
    intFormedYear: formedYear,
    intDiedYear: diedYear,
    strGender: gender,
    intMembers: members,
    strCountry: country,
    strBiographyEN: biography,
    albumsList = [],
    genre = [],
  } = artist;

  const genresListMarkup = `
    <ul class="artists-genres-list">
      ${genre
        .map(genre => `<li class="artists-genre-item">${genre}</li>`)
        .join(' ')}
    </ul>`;

  const albumsListMarkup = albumsList
    .map(album => createAlbumListMarkup(album))
    .join(' ');

  let yearsText = formedYear;
  yearsText += diedYear ? `-${diedYear}` : `-present`;

  return `
    <h5 class="epilogue artist-name">${name}</h5>
    <div class="artist-info">
      <img class="artist-photo" src="${photo}" alt="${name} photo" />
      <div class="artist-about">
      <div class="artist-about-part">
        <div class="artist-category-info artist-about-part-left">
          <p class="artist-category-name">Years active</p>
          <p class="artist-category-text">${yearsText}</p>
        </div>
        <div class="artist-category-info">
          <p class="artist-category-name">Sex</p>
          <p class="artist-category-text">${gender}</p>
        </div>
      </div>
      <div class="artist-about-part ">
        <div class="artist-category-info artist-about-part-left">
          <p class="artist-category-name">Members</p>
          <p class="artist-category-text">${members}</p>
        </div>
        <div class="artist-category-info">
          <p class="artist-category-name">Country</p>
          <p class="artist-category-text">${country}</p>
        </div>
       </div>
        <div class="biography-box">
        <p class="artist-category-name">Biography</p>
        <p class="artist-category-text-biography">${biography}</p>
        </div>
        ${genresListMarkup}
      </div>
    </div>
    <p class="albums-header">Albums</p>
    <ul class="albums-list">${albumsListMarkup}</ul>
  `;
}

function createAlbumListMarkup(album) {
  const { strAlbum: albumName, tracks = [] } = album;

  const tracksListMarkup = tracks
    .map(track => createTrackListMarkup(track))
    .join('');

  return `<li>
    <p class="album-name">${albumName}</p>
    <ul class="tracks-title">
      <li>Track</li>
      <li>Time</li>
      <li>Link</li>
    </ul>
    <ul class="tracks-list">
      ${tracksListMarkup}
    </ul>
  </li>`;
}

function createTrackListMarkup({
  strTrack: trackTitle,
  intDuration: time,
  movie,
}) {
  const trackTime = getTime(time);
  const movieSrc = movie || '';
  const movieHidden = movie ? '' : ' movie-hidden';

  return `
    <li class="track-item">
      <p class="track-title">${trackTitle}</p>
      <p class="track-time">${trackTime}</p>
      <a class="track-movie${movieHidden}" href="${movieSrc}" target="_blank" rel="noopener noreferrer">
        <svg class="modal-youtube-icon" width="24px" height="24px">
          <use href="/img/icons.svg#icon-youtube"></use>
        </svg>
      </a>
    </li>`;
}

function getTime(ms) {
  const second = 1000;
  const minute = second * 60;

  const minutes = Math.floor(ms / minute);
  const seconds = Math.floor((ms % minute) / second);

  return (
    minutes.toString().padStart(2, '0') +
    ':' +
    seconds.toString().padStart(2, '0')
  );
}
