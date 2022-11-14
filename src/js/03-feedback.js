const refs = {
  form: document.querySelector(`.feedback-form`),
  input: document.querySelector(`.feedback-form input`),
  textarea: document.querySelector(`.feedback-form textarea`),
  button: document.querySelector(`.feedback-form button`),
};

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

refs.form.addEventListener(`submit`, onFormSubmit);

refs.form.addEventListener(`input`, event => {
  //   console.log(event.target.name);
  //   console.log(event.target.value);
  formData[event.target.name] = event.target.value;
  console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// console.log(localStorage[STORAGE_KEY]);

const formInfo = JSON.parse(localStorage.getItem(STORAGE_KEY));

console.log(formInfo);

function onFormSubmit(event) {
  event.preventDefault();

  const savedFormData = localStorage.getItem(STORAGE_KEY);

  if (savedFormData) {
    console.log(savedFormData);
    refs.form.value = JSON.parse(savedFormData);
  }

  console.log(`отправляем форму и очищаем поле`);

  event.currentTarget.reset();
}

// ______________________________
// function onEmailInput(event) {
//   event.preventDefault();
//   const formInfo = {
//     email: '',
//     message: '',
//   };
//   formInfo.email = event.currentTarget.value;
//   console.log(formInfo.email);
//   //   localStorage.clear();
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formInfo.email));
// }

// function onMessageInput(event) {
//   event.preventDefault();
//   const formInfo = {
//     email: '',
//     message: '',
//   };
//   formInfo.message = event.currentTarget.value;
//   console.log(formInfo.message);

//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formInfo.message));
// }

// __________________________________________
// function autoFillFormData() {
//   const savedFormData = localStorage.getItem('feedback-form-state');
//   if (savedFormData) console.log(savedFormData);
//   console.log(savedFormData);
// }

// // expected output: 42

// console.log(objformInfo.message);
// expected output: true

// localStorage.setItem('feedback-form-state', JSON.stringify(formInfo));

// Під час завантаження сторінки перевіряй
// стан сховища, і якщо там є збережені дані,
//     заповнюй ними поля форми.В іншому випадку поля повинні бути порожніми
