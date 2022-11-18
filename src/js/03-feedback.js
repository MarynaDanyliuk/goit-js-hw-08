var throttle = require('lodash.throttle');

const refs = {
  form: document.querySelector(`.feedback-form`),
  input: document.querySelector(`.feedback-form input`),
  textarea: document.querySelector(`.feedback-form textarea`),
  button: document.querySelector(`.feedback-form button`),
};

const STORAGE_KEY = 'feedback-form-state';

const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

refs.form.addEventListener(`submit`, onFormSubmit);
refs.form.addEventListener(`input`, throttle(formDataInput, 500));

function formDataInput(event) {
  event.preventDefault();
  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  if (formData.message && formData.email) {
    console.log(`отправляем форму и очищаем поле`);
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    event.target.reset();
  }
}

populateForm(formData);

function populateForm(formData) {
  if (formData.message) {
    refs.textarea.value = formData.message;
  }
  if (formData.email) {
    refs.input.value = formData.email;
  }
  console.log(formData);
}

// const formInfo = ;

// refs.form.addEventListener(`input`, event => {
//   //   console.log(event.target.name);
//   //   console.log(event.target.value);
//   formData[event.target.name] = event.target.value;
//   console.log(formData);
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// });

// ______________________
// if (formData) {
//   refs.textarea.value = formData.message;
//   refs.input.value = formData.email;
// }
// __________________________

// if (savedFormData) {
//   console.log(savedFormData);
//   refs.textarea.value = savedFormData.message;
//   refs.input.value = savedFormData.email;
//   // const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
// }

// _____________________
// const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
