import { 
    feedbackFormEL as form,
    feedbackFormBackdrop,
    feedbackFormCloseBtn,
    feedbackFormRatingContainer,
    feedbackFormSubmitBtn 
} from './refer.js';

import { postFeedback } from './artists-api.js';

const LOCAL_STORAGE_KEY = 'form-state';

let formData = {
    name: '',
    message: '',
    rating: null
};

function handleCloseForm() {
    feedbackFormBackdrop.style.display = 'none';
    document.body.style.overflow = '';
    removeEventListeners();
}

function handleEscapeKey(event) {
    if (event.key === 'Escape') {
        handleCloseForm();
    }
}

function handleBackdropClick(event) {
    if (event.target === feedbackFormBackdrop) {
        handleCloseForm();
    }
}

function handleInputChange(event) {
    if (event.target.name === 'user-name') {
        formData.name = event.target.value.trim();
    } else if (event.target.name === 'user-comment') {
        formData.message = event.target.value.trim();
    }
    
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

function handleRatingClick(event) {
    const star = event.target.closest('svg');
    if (!star) return;
    
    const stars = feedbackFormRatingContainer.querySelectorAll('svg');
    const clickedIndex = Array.from(stars).indexOf(star);
    
    if (clickedIndex !== -1) {
        formData.rating = clickedIndex + 1;
        updateStarsDisplay(clickedIndex + 1);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
    }
}

function updateStarsDisplay(rating) {
    const stars = feedbackFormRatingContainer.querySelectorAll('svg');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.style.fill = '#FFD700';
        } else {
            star.style.fill = 'white';
        }
    });
}

function validateFormData() {
    const errors = [];
    
    if (!formData.name || formData.name.length < 2) {
        errors.push('Name must be at least 2 characters long');
    }
    if (formData.name.length > 16) {
        errors.push('Name must be no more than 16 characters long');
    }
    
    if (!formData.rating || formData.rating < 1 || formData.rating > 5) {
        errors.push('Please select a rating from 1 to 5 stars');
    }
    
    if (!formData.message || formData.message.length < 10) {
        errors.push('Message must be at least 10 characters long');
    }
    if (formData.message.length > 512) {
        errors.push('Message must be no more than 512 characters long');
    }
    
    return errors;
}

async function handleFormSubmit(event) {
    event.preventDefault();
    
    formData.name = form.elements['user-name'].value.trim();
    formData.message = form.elements['user-comment'].value.trim();
    
    const errors = validateFormData();
    if (errors.length > 0) {
        alert(errors.join('\n'));
        return;
    }
    
    const feedbackData = {
        name: formData.name,
        rating: formData.rating,
        descr: formData.message
    };
    
    try {
        feedbackFormSubmitBtn.disabled = true;
        feedbackFormSubmitBtn.textContent = 'Sending...';
        
        await postFeedback(feedbackData);
        
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        form.reset();
        formData = { name: '', message: '', rating: null };
        updateStarsDisplay(0);
        handleCloseForm();
        
        alert('Feedback sent successfully!');
        
    } catch (error) {
        console.error('Error sending feedback:', error);
        alert('Error sending feedback. Please try again.');
    } finally {
        feedbackFormSubmitBtn.disabled = false;
        feedbackFormSubmitBtn.textContent = 'Submit';
    }
}

function addEventListeners() {
    feedbackFormCloseBtn.addEventListener('click', handleCloseForm);
    document.addEventListener('keydown', handleEscapeKey);
    feedbackFormBackdrop.addEventListener('click', handleBackdropClick);
    form.addEventListener('input', handleInputChange);
    form.addEventListener('submit', handleFormSubmit);
    feedbackFormRatingContainer.addEventListener('click', handleRatingClick);
}

function removeEventListeners() {
    feedbackFormCloseBtn.removeEventListener('click', handleCloseForm);
    document.removeEventListener('keydown', handleEscapeKey);
    feedbackFormBackdrop.removeEventListener('click', handleBackdropClick);
    form.removeEventListener('input', handleInputChange);
    form.removeEventListener('submit', handleFormSubmit);
    feedbackFormRatingContainer.removeEventListener('click', handleRatingClick);
}

export function openFeedbackForm() {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
        formData = { ...formData, ...JSON.parse(savedData) };
        form.elements['user-name'].value = formData.name || '';
        form.elements['user-comment'].value = formData.message || '';
        if (formData.rating) {
            updateStarsDisplay(formData.rating);
        }
    }
    
    feedbackFormBackdrop.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    addEventListeners();
}

if (feedbackFormBackdrop && getComputedStyle(feedbackFormBackdrop).display !== 'none') {
    addEventListeners();
}