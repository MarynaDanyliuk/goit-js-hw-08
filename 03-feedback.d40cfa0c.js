const e={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea"),button:document.querySelector(".feedback-form button")},t={};e.form.addEventListener("submit",(function(t){t.preventDefault();const o=localStorage.getItem("feedback-form-state");o&&(console.log(o),e.form.value=JSON.parse(o));console.log("отправляем форму и очищаем поле"),t.currentTarget.reset()})),e.form.addEventListener("input",(e=>{t[e.target.name]=e.target.value,console.log(t),localStorage.setItem("feedback-form-state",JSON.stringify(t))}));const o=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(o);
//# sourceMappingURL=03-feedback.d40cfa0c.js.map
