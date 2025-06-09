const form = document.querySelector('.form-main');
const LOCAL_STORAGE_KEY = 'form-state';

let formData = {
    name: '',
  message: '',
};

const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.name.value = formData.name || '';
  form.elements.message.value = formData.message || '';
}

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('form-end-button', event => {
  event.preventDefault();

  if (!formData.name || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log('Submitted data:', formData);

  localStorage.removeItem(LOCAL_STORAGE_KEY);
  form.reset();
  formData = { name: '', message: '' };
});