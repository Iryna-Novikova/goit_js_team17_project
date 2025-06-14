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
    this.openBtn = document.getElementById('openModalBtn');
    this.modal = document.getElementById('feedbackModal');
    this.form = document.getElementById('feedbackForm');
    this.closeBtn = document.getElementById('closeModalBtn');

    this.nameInput = document.getElementById('user-name');
    this.messageInput = document.getElementById('user-comment');
    this.ratingContainer = document.getElementById('rating-container');
    this.submitBtn = document.getElementById('submitBtn');

    this.stars = this.ratingContainer?.querySelectorAll('.star') || [];

    this.errors = {
      name: document.getElementById('name-error'),
      message: document.getElementById('message-error')
    };
  }

  bindEvents() {
    this.openBtn?.addEventListener('click', () => this.openModal());
    this.closeBtn?.addEventListener('click', () => this.closeModal());
    this.modal?.addEventListener('click', (e) => this.handleBackdropClick(e));
    document.addEventListener('keydown', (e) => this.handleEscapeKey(e));

    this.form?.addEventListener('input', (e) => this.handleInputChange(e));
    this.form?.addEventListener('submit', (e) => this.handleSubmit(e));
    this.stars.forEach((star, index) => {
      star.addEventListener('click', () => this.setRating(index + 1));
      star.addEventListener('mouseenter', () => this.handleStarHover(index + 1));
      star.addEventListener('mouseleave', () => this.updateStarsDisplay(this.formData.rating));
    });
  }

  openModal() {
    if (!this.modal) return;
    this.modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      this.nameInput?.focus();
    }, 100);
  }

  closeModal() {
    if (!this.modal) return;
    this.modal.classList.remove('is-open');
    document.body.style.overflow = '';
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

  handleStarHover(rating) {
    this.updateStarsDisplay(rating, true);
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
      this.saveData();
    }
  }

  validateField(fieldName) {
    const rules = this.validationRules[fieldName];
    if (!rules) return true;

    let isValid = true;
    const value = this.formData[fieldName];
    const input = fieldName === 'name' ? this.nameInput : this.messageInput;
    const errorElement = this.errors[fieldName];

    if (!value || value.length < rules.min || value.length > rules.max) {
      input?.classList.add('error');
      if (errorElement) errorElement.style.display = 'block';
      isValid = false;
    } else {
      input?.classList.remove('error');
      if (errorElement) errorElement.style.display = 'none';
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
      await this.sendFeedback();

      this.clearForm();
      this.clearSavedData();
      this.closeModal();

      this.showSuccessMessage('Відгук успішно відправлено!');
    } finally {
      this.setSubmitButtonState(false, 'Відправити');
    }
  }

  async sendFeedback() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1000);
    });
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

    Object.values(this.errors).forEach(errorElement => {
      if (errorElement) errorElement.style.display = 'none';
    });
  }
    
  showErrorMessage(message) {
    alert(message);
  }

  showSuccessMessage(message) {
    alert(message);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.feedbackModal = new FeedbackModal();
});

const stars = document.querySelectorAll(".form-str i")

stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    })
  })
})


export function showAlert(message, pos = 'topRight') {
    iziToast.show({
        title: '',
        message: message,
        backgroundColor: 'rgb(118, 65, 145)',
        messageColor: 'rgb(255, 255, 255)',
        position: pos,
    });
}
import { showAlert } from './info-message.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
