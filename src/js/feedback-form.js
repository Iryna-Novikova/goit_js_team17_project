import { showAlert } from './info-message.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { postFeedback } from './artists-api.js';

class FeedbackModal {
  constructor() {
    this.formData = {
      name: '',
      message: '',
      rating: null
    };

    this.validationRules = {
      name: { min: 2, max: 16 },
      message: { min: 10, max: 512 },
      rating: { min: 1, max: 5 }
    };

    this.init();
  }

  init() {
    this.bindElements();
    this.bindEvents();
    this.loadSavedData();
  }

  bindElements() {
    this.modal = document.querySelector('[data-feedback-form]');
    this.form = document.getElementById('feedback-form');
    this.closeBtn = document.getElementById('close-feedback-btn');
    this.nameInput = document.getElementById('user-name');
    this.messageInput = document.getElementById('user-comment');
    this.ratingContainer = document.getElementById('rating-container');
    this.submitBtn = document.getElementById('submit-btn');
    this.stars = this.ratingContainer?.querySelectorAll('i.fa-star') || [];
    this.errors = {
      name: document.getElementById('name-error'),
      message: this.form?.querySelector('.text-inva'),
      rating: this.form?.querySelector('.rating-error')
    };
  }

  bindEvents() {
    this.closeBtn?.addEventListener('click', () => this.closeModal());
    this.modal?.addEventListener('click', (e) => this.handleBackdropClick(e));
    document.addEventListener('keydown', (e) => this.handleEscapeKey(e));

    this.form?.addEventListener('input', (e) => this.handleInputChange(e));
    this.form?.addEventListener('submit', (e) => this.handleSubmit(e));

    this.stars.forEach((star, index) => {
      star.addEventListener('click', () => this.setRating(index + 1));
      star.addEventListener('mouseenter', () => this.updateStarsDisplay(index + 1, true));
      star.addEventListener('mouseleave', () => this.updateStarsDisplay(this.formData.rating));
    });
  }

  openModal() {
  if (!this.modal) return;
  this.modal.classList.remove('visually-hidden');
  this.modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    this.nameInput?.focus();
  }, 100);
}


  closeModal() {
  if (!this.modal) return;
  this.modal.classList.remove('is-open');
  this.modal.classList.add('visually-hidden');
  document.body.style.overflow = '';
  this.clearSavedData();
}


  handleBackdropClick(event) {
    if (event.target === this.modal) {
      this.closeModal();
    }
  }

  handleEscapeKey(event) {
    if (event.key === 'Escape' && this.modal?.classList.contains('is-open')) {
      this.closeModal();
    }
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    switch (name) {
      case 'user-name':
        this.formData.name = value.trim();
        this.validateField('name');
        break;
      case 'user-comment':
        this.formData.message = value.trim();
        this.validateField('message');
        break;
    }

    this.saveData();
  }

  updateStarsDisplay(rating, isHover = false) {
    this.stars.forEach((star, index) => {
      star.classList.toggle('active', index < rating);
      if (isHover) {
        star.classList.toggle('hover', index < rating);
      } else {
        star.classList.remove('hover');
      }
    });
  }

  setRating(rating) {
    if (rating >= 1 && rating <= 5) {
      this.formData.rating = rating;
      this.updateStarsDisplay(rating);
      this.validateField('rating');
      this.saveData();
    }
  }

  validateField(fieldName) {
    const rules = this.validationRules[fieldName];
    if (!rules) return true;

    let isValid = true;
    const value = this.formData[fieldName];
    let input = null;
    if (fieldName === 'name') input = this.nameInput;
    if (fieldName === 'message') input = this.messageInput;
    const errorElement = this.errors[fieldName];

    if (!value || value.length < rules.min || value.length > rules.max) {
      input?.classList.add('error');
      if (errorElement) errorElement.style.display = 'block';
      isValid = false;
    } else {
      input?.classList.remove('error');
      if (errorElement) errorElement.style.display = 'none';
    }

    if (fieldName === 'rating') {
      const container = this.ratingContainer;
      if (!value || value < rules.min || value > rules.max) {
        container?.classList.add('error');
        if (errorElement) errorElement.style.display = 'block';
        isValid = false;
      } else {
        container?.classList.remove('error');
        if (errorElement) errorElement.style.display = 'none';
      }
    }

    return isValid;
  }

  validateForm() {
    const errors = [];
    const { name, message, rating } = this.formData;
    const rules = this.validationRules;

    if (!name || name.length < rules.name.min || name.length > rules.name.max) {
      errors.push(`Ім'я повинно містити від ${rules.name.min} до ${rules.name.max} символів`);
    }

    if (!message || message.length < rules.message.min || message.length > rules.message.max) {
      errors.push(`Повідомлення повинно містити від ${rules.message.min} до ${rules.message.max} символів`);
    }

    if (!rating || rating < rules.rating.min || rating > rules.rating.max) {
      errors.push(`Будь ласка, оберіть рейтинг від ${rules.rating.min} до ${rules.rating.max} зірок`);
    }

    return errors;
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.updateFormDataFromInputs();
    const errors = this.validateForm();

    if (errors.length > 0) {
      this.showErrorMessage(errors.join('\n'));
      return;
    }

    try {
      await this.submitForm();
    } catch (error) {
      console.error('Error sending feedback:', error);
      this.showErrorMessage('Помилка при відправці відгуку. Спробуйте ще раз.');
    }
  }

  updateFormDataFromInputs() {
    this.formData.name = this.nameInput?.value.trim() || '';
    this.formData.message = this.messageInput?.value.trim() || '';
  }

  async submitForm() {
    this.setSubmitButtonState(true, 'Відправляється...');
    try {
      await postFeedback({
        name: this.formData.name,
        rating: this.formData.rating,
        descr: this.formData.message
      });
      this.clearForm();
      this.clearSavedData();
      this.closeModal();
      this.showSuccessMessage('Відгук успішно відправлено!');
    } finally {
      this.setSubmitButtonState(false, 'Відправити');
    }
  }

  setSubmitButtonState(disabled, text) {
    if (this.submitBtn) {
      this.submitBtn.disabled = disabled;
      this.submitBtn.textContent = text;
    }
  }

  clearForm() {
    this.form?.reset();
    this.formData = { name: '', message: '', rating: null };
    this.updateStarsDisplay(0);
    this.clearErrorStates();
  }

  clearErrorStates() {
    this.nameInput?.classList.remove('error');
    this.messageInput?.classList.remove('error');
    this.ratingContainer?.classList.remove('error');
    Object.values(this.errors).forEach(e => e && (e.style.display = 'none'));
  }

  showErrorMessage(message) {
    showAlert(message, 'topRight');
  }

  showSuccessMessage(message) {
    showAlert(message, 'topRight');
  }

  saveData() {
    if (
      this.formData.name === '' &&
      this.formData.message === '' &&
      this.formData.rating === null
    ) return;
    localStorage.setItem('feedbackData', JSON.stringify(this.formData));
  }

  clearSavedData() {
    localStorage.removeItem('feedbackData');
  }

  loadSavedData() {
    const saved = localStorage.getItem('feedbackData');
    if (!saved) return;
    try {
      this.formData = JSON.parse(saved);
      this.nameInput.value = this.formData.name || '';
      this.messageInput.value = this.formData.message || '';
      this.updateStarsDisplay(this.formData.rating || 0);
    } catch (e) {
      console.warn('Помилка при завантаженні локальних даних:', e);
    }
  }
}

export const feedbackModalInstance = new FeedbackModal();
export function openFeedbackModal() {
  feedbackModalInstance.openModal();
}

const stars = document.querySelectorAll(".form-str i");
stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
  });
});
