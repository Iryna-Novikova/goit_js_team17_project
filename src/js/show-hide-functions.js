import { refer } from './js/refer.js';
// --- Header Functions ---
export function showMobileMenu() {
  refs.mobileMenu.classList.remove('visually-hidden');
}

export function hideMobileMenu() {
  refs.mobileMenu.classList.add('visually-hidden');
}

// --- Hero Functions ---
export function showHeroButton() {
  refs.heroBtnEl.classList.remove('visually-hidden');
}

export function hideHeroButton() {
  refs.heroBtnEl.classList.add('visually-hidden');
}

// --- Artists Section Functions ---
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

export function showLearnMoreButton() {
  refs.leanMoreBtn.classList.remove('visually-hidden');
}

export function hideLearnMoreButton() {
  refs.leanMoreBtn.classList.add('visually-hidden');
}

// --- Artist Details Modal Functions ---
export function showArtistsModal() {
  refs.artistsModalBackdrop.classList.remove('visually-hidden');
  document.body.style.overflow = 'hidden'; // Заборонити прокрутку фону
}

export function hideArtistsModal() {
  refs.artistsModalBackdrop.classList.add('visually-hidden');
  document.body.style.overflow = ''; // Дозволити прокрутку фону
}

// --- Feedback Modal Functions ---
export function showFeedbackFormModal() {
  refs.feedbackFormBackdrop.classList.remove('visually-hidden');
  document.body.style.overflow = 'hidden';
}

export function hideFeedbackFormModal() {
  refs.feedbackFormBackdrop.classList.add('visually-hidden');
  document.body.style.overflow = '';
}

export function showFeedbackSlider() {
  refs.feedbackSliderContainer.classList.remove('visually-hidden');
}

export function hideFeedbackSlider() {
  refs.feedbackSliderContainer.classList.add('visually-hidden');
}

export function showFeedbackSliderPrevBtn() {
  refs.feedbackSliderPrevBtn.classList.remove('visually-hidden');
}

export function hideFeedbackSliderPrevBtn() {
  refs.feedbackSliderPrevBtn.classList.add('visually-hidden');
}

export function showFeedbackSliderNextBtn() {
  refs.feedbackSliderNextBtn.classList.remove('visually-hidden');
}

export function hideFeedbackSliderNextBtn() {
  refs.feedbackSliderNextBtn.classList.add('visually-hidden');
}
