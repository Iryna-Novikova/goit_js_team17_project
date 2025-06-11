import { refer } from './js/refer.js';

export function showLoadMoreBtn() {
  refs.loadMoreBtn.classList.remove('visually-hidden');
}

export function hideLoadMoreBtn() {
  refs.loadMoreBtn.classList.add('visually-hidden');
}

export function showArtistsList() {
  refs.artistsList.classList.remove('visually-hidden');
}

export function hideArtistsList() {
  refs.artistsList.classList.add('visually-hidden');
}
export function showLoaderFeedback() {
  refs.feedbackLoaderElm.classList.remove('visually-hidden');
}

export function hideLoaderFeedback() {
  refs.feedbackLoaderElm.classList.add('visually-hidden');
}
export function showLoaderArtists() {
  refs.artistLoaderElm.classList.remove('visually-hidden');
}

export function hideLoaderArtists() {
  refs.artistLoaderElm.classList.add('visually-hidden');
}
export function showLoaderModal() {
  refs.artistModalLoaderElm.classList.remove('visually-hidden');
}

export function hideLoaderModal() {
  refs.artistModalLoaderElm.classList.add('visually-hidden');
}
