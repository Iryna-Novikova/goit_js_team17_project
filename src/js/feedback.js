
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';
// import { getFeedback } from './artists-api.js';

const feedbackContainer = document.getElementById('feedback-container');
const API_URL = 'https://sound-wave.b.goit.study/api/feedbacks';

function createFeedbackCard({ rating, descr, name }) {
    const roundedRating = Math.round(rating);
    return `
    <div class="swiper-slide">
        <div class="rating" data-rating="${roundedRating}"></div>
        <p class="descry">${descr}</p>
        <p class="name">${name}</p>
</div>
  `;
}

function initializeStarRatings() {
    document.querySelectorAll('.rating').forEach((element) => {
        const rating = parseInt(element.dataset.rating);
        if (isNaN(rating)) {
            console.error('Invalid rating value:', element.dataset.rating);
            return;
        }
        element.innerHTML = `
      <span class="star-rating">
        ${[...Array(5)]
                .map((_, i) => `<span class="star ${i < rating ? 'filled' : ''}">★</span>`)
                .join('')}
      </span>
    `;
    });
}

async function fetchFeedbacks() {
    try {
        console.log('Fetching feedbacks from:', API_URL);
        const response = await axios.get(API_URL, {
            params: {
                limit: 3,
                page: 1,
            },
        }
        );

        const feedbacks = response.data.data;
        console.log('Received feedbacks:', feedbacks);

        if (!Array.isArray(feedbacks) || feedbacks.length === 0) {
            console.warn('No feedbacks available or invalid data format.');
            feedbackContainer.innerHTML = '<p>No feedbacks available.</p>';
            return;
        }

        feedbackContainer.innerHTML = feedbacks.map(createFeedbackCard).join('');
        initializeStarRatings();

        const swiperElement = document.querySelector('.feedback-swiper');
        if (!swiperElement) {
            console.error('Swiper container not found!');
            return;
        }

        const swiper = new Swiper('.feedback-swiper', {
            modules: [Navigation, Pagination],
            slidesPerView: 1,
            spaceBetween: 3,
            loop: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.custom-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    const totalSlides = this.slides.length;
                    if (index === 0) {
                        return `<span class="${className}" data-slide="first"></span>`;
                    } else if (index === totalSlides - 1) {
                        return `<span class="${className}" data-slide="last"></span>`;
                    } else if (index === Math.floor(totalSlides / 2)) {
                        return `<span class="${className}" data-slide="middle"></span>`;
                    }
                    return '';
                },
            },
            touchEventsTarget: 'container',
            grabCursor: true,
        });
        console.log('Swiper initialized.');
    } catch (error) {
        console.error('Error fetching feedbacks:', {
            message: error.message,
            status: error.response?.status,
            data: error.response?.data,
        });
        feedbackContainer.innerHTML = '<p>Failed to load feedbacks. Please try again later.</p>';
    }
}

document.addEventListener('DOMContentLoaded', fetchFeedbacks);
// showFeedbackLoader();
// hideFeedbackLoader();