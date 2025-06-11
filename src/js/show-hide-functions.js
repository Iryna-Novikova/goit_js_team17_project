import { refs } from './refer.js';

export function showLoadMoreBtn() {
  refs.loadMoreBtnElm.classList.remove('visually-hidden');
}

export function hideLoadMoreBtn() {
  refs.loadMoreBtnElm.classList.add('visually-hidden');
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
