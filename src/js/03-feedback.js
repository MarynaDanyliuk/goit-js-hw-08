const refs = {
  form: document.querySelector(`.feedback-form`),
  input: document.querySelector(`.feedback-form input`),
  textarea: document.querySelector(`.feedback-form textarea`),
  button: document.querySelector(`.feedback-form button`),
};

refs.form.addEventListener(`submit`, onFormSubmit);
refs.input.addEventListener(`input`, onEmailInput);
refs.textarea.addEventListener(`input`, onMessageInput);

const formInfo = {
  email: '',
  message: '',
};

localStorage.setItem('feedback-form-state', JSON.stringify(formInfo));

function onFormSubmit(event) {
  event.preventDefault();

  const formInfo = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (formInfo) {
    refs.textarea.value = formInfo.message;
    refs.input.value = formInfo.email;
  }

  console.log(formInfo);
  //   console.log(localStorage['feedback-form-state']);

  console.log(`отправляем форму и очищаем поле`);

  event.currentTarget.reset();
}

function onEmailInput(event) {
  event.preventDefault();
  formInfo.email = event.currentTarget.value;
  //   localStorage.clear();
  localStorage.setItem('feedback-form-state', JSON.stringify(formInfo));
}

function onMessageInput(event) {
  event.preventDefault();
  formInfo.message = event.currentTarget.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formInfo));
}

function autoFillFormData() {
  const savedFormData = localStorage.getItem('feedback-form-state');
  if (savedFormData) console.log(savedFormData);
  console.log(savedFormData);
}

// // expected output: 42

// console.log(objformInfo.message);
// expected output: true

// localStorage.setItem('feedback-form-state', JSON.stringify(formInfo));

// Під час завантаження сторінки перевіряй
// стан сховища, і якщо там є збережені дані,
//     заповнюй ними поля форми.В іншому випадку поля повинні бути порожніми
