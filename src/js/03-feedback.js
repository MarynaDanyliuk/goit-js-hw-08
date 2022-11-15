var throttle = require('lodash.throttle');

const refs = {
  form: document.querySelector(`.feedback-form`),
  input: document.querySelector(`.feedback-form input`),
  textarea: document.querySelector(`.feedback-form textarea`),
  button: document.querySelector(`.feedback-form button`),
};

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

refs.form.addEventListener(`submit`, onFormSubmit);

// refs.form.addEventListener(`input`, event => {
//   //   console.log(event.target.name);
//   //   console.log(event.target.value);
//   formData[event.target.name] = event.target.value;
//   console.log(formData);
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// });

refs.form.addEventListener(`input`, throttle(formDataInput, 500));

function formDataInput(event) {
  formData[event.target.name] = event.target.value;
  console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

const formInfo = JSON.parse(localStorage.getItem(STORAGE_KEY));

console.log(formInfo);

populateForm(formInfo);

function populateForm(formInfo) {
  if (formInfo) {
    refs.textarea.value = formInfo.message;
    refs.input.value = formInfo.email;
  }
}

function onFormSubmit(event) {
  event.preventDefault();

  console.log(`отправляем форму и очищаем поле`);

  event.currentTarget.reset();
}
