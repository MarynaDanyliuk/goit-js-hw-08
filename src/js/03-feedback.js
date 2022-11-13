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

  console.log(localStorage['feedback-form-state']);
  console.log(`отправляем форму и очищаем поле`);

  event.currentTarget.reset();
}

function onEmailInput(event) {
  event.preventDefault();
  formInfo.email = event.target.value;
  //   localStorage.clear();
  localStorage.setItem('feedback-form-state', JSON.stringify(formInfo));
}

function onMessageInput(event) {
  event.preventDefault();
  formInfo.message = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formInfo));
}

const savedFormData = localStorage.getItem('feedback-form-state');
// console.log(savedFormData);
// localStorage.setItem('feedback-form-state', JSON.stringify(formInfo));

function autoFillFormData() {
  const savedFormData = localStorage.getItem('feedback-form-state');
  if (savedFormData) console.log(savedFormData);
}

// Під час завантаження сторінки перевіряй
// стан сховища, і якщо там є збережені дані,
//     заповнюй ними поля форми.В іншому випадку поля повинні бути порожніми
