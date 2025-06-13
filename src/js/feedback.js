
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swiper from 'swiper';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import axios from 'axios';
// import 'css-star-rating/css/star-rating.min.css';
import {hideLoaderFeedback, showLoaderFeedback} from './show-hide-functions.js'
import { showAlert } from './info-message.js';

const wrapper = document.getElementById('feedback-wrapper');
const paginationContainer = document.getElementById('pagination');
let swiperInstance;

async function fetchFeedbacks() {
    showLoaderFeedback();
    try {
        const response = await axios.get('https://sound-wave.b.goit.study/api/feedbacks', {
            params: {
                limit: 3,
                page: 1
            }
        });
        let feedbacks = response.data.data;
        if (feedbacks && feedbacks.length > 3) {
            feedbacks = feedbacks.slice(0, 3);
        }

        if (!feedbacks || feedbacks.length === 0) {
            "No feedback find"
        }

        while (feedbacks.length < 3) {
            feedbacks.push({ name: `Користувач ${feedbacks.length + 1}`, descr: 'Наразі немає додаткових відгуків для відображення.', rating: 3 });
        }


        renderFeedbacks(feedbacks);
        initSwiper();
        initPaginationControls();

    } catch (err) {
        showAlert(`Помилка при завантаженні відгуків ${err}`, 'bottomCenter');
        showErrorMessage();
    }
    hideLoaderFeedback();
}

function renderFeedbacks(feedbacks) {
    wrapper.innerHTML = '';

    feedbacks.forEach(fb => {
        const roundedRating = Math.round(fb.rating);
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="rating">
                ${generateStarRating(roundedRating)}
            </div>
            <div class="text epilogue">"${fb.descr}"</div>
            <div class="user">${fb.name}</div>
        `;
        wrapper.appendChild(slide);
    });
}

//  генерації зірочок 
function generateStarRating(rating) {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHtml += '<i class="fas fa-star star"></i>';
        } else {
            starsHtml += '<i class="fas fa-star star-empty"></i>';
        }
    }
    return starsHtml;
}


function initSwiper() {
    if (swiperInstance) {
        swiperInstance.destroy(true, true);
    }

    //  Swiper 
    swiperInstance = new Swiper('.swiper-container', {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 0,
        grabCursor: true,
        centeredSlides: true,
        autoHeight: true,
        speed: 1000,
        observer: true,
        observeParents: true,
        watchOverflow: true,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        on: {
            slideChange: updatePagination,
            init: updatePagination,
        }
    });

    // пагінація
    createPaginationDots(3);
    updatePagination();
}

function createPaginationDots(totalDots) {
    paginationContainer.innerHTML = '';

    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('span');
        dot.id = `pag-${i}`;
        dot.addEventListener('click', () => {
            if (swiperInstance) {
                swiperInstance.slideToLoop(i);
            }
        });
        paginationContainer.appendChild(dot);
    }
}


function initPaginationControls() {
    document.getElementById('prevBtn').addEventListener('click', () => {
        if (swiperInstance) {
            swiperInstance.slidePrev();
        }
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        if (swiperInstance) {
            swiperInstance.slideNext();
        }
    });
}
function updatePagination() {
    if (!swiperInstance || swiperInstance.slides.length === 0) return;
    const activeIndex = swiperInstance.realIndex;
    const totalSlides = swiperInstance.slides.length;
    document.querySelectorAll('.pagination span').forEach((span, index) => {
        span.classList.toggle('active', index === activeIndex);
    });
    if (activeIndex === 0) {
        prevBtn.classList.add('disabled');
    } else {
        prevBtn.classList.remove('disabled');
    }
    if (activeIndex === totalSlides - 1) {
        nextBtn.classList.add('disabled');
    } else {
        nextBtn.classList.remove('disabled');
    }
}

document.addEventListener('DOMContentLoaded', fetchFeedbacks);