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
  console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
  localStorage.removeItem("feedback-form-state");
  form.reset();
}

form.addEventListener("input", _.throttle(handlerInput, 500));

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