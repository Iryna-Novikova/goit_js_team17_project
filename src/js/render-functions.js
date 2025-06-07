import { refs } from './refer.js'

function createArtistCard(artist) {
    const {
        _id: id,
        strArtist: name,
        strArtistThumb: photo,
        genres = [],
        strBiographyEN: shortDescription,
    } = artist;

    const genresMarkup = genres.map(genre => `<span class="genre">${genre}</span>`).join(' ');

    return `
    <li class="artist-card" data-id="${id}">
        <div class="artist-info">
            <img src="${photo}" alt="${name}" class="artist-photo" />
            <div class="artist-genres">${genresMarkup}</div>
            <h4 class="artist-name epilogue">${name}</h4>
            <p class="artist-description">${shortDescription ? shortDescription.slice(0, 80) + '...' : ''}</p>
            <div class="learn-more-container">
                <span class="learn-more-text">Learn More</span>
                <button class="learn-more-btn" data-id="${id}">
                    <svg class="learn-more-icon" viewBox="0 0 17 32">
                        <use href="../img/icons.svg#icon-caret-right"></use>
                    </svg>
                </button>
            </div>
        </div>
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
