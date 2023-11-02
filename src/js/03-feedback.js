import throttle from 'lodash.throttle';

const submitBtn = document.querySelector("button");
const form = document.querySelector(".feedback-form");

function setFieldsValue() {
  const storageValue = JSON.parse(localStorage.getItem("feedback-form-state"));
  if (!storageValue) {
    return;
  }
  for (const key in storageValue) {
    form.elements[key].value = storageValue[key];
  }
}
setFieldsValue();

submitBtn.addEventListener("click", handlerSubmit); 

function handlerSubmit(evt) {
  evt.preventDefault();
  const { email, message } = form.elements;
  if (email.value.length > 0 && message.value.length > 0) {
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    localStorage.removeItem("feedback-form-state");
    form.reset();
  } else {
    alert("Please fill all fields.")
  }
}

form.addEventListener("input", throttle(handlerInput, 500));

function handlerInput(evt) {
  const field = evt.target;
  const storageValue = JSON.parse(localStorage.getItem("feedback-form-state"));
  if (!storageValue) {
    const initFormValue = { email: "", message: "" };
    initFormValue[field.name] = field.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(initFormValue));
  } else {
    storageValue[field.name] = field.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(storageValue));
  }
}