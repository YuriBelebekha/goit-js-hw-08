import throttle from "lodash.throttle";

const refs = {
  form: document.querySelector('.feedback-form'), 
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
}

const feedbackFormData = {};
const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(e) {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY))); 

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);  
};

function onFormInput(e) {  
  feedbackFormData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormData));
};

function getDataFromLocalStorage() {
  const localStorageData = JSON.parse(localStorage.getItem(STORAGE_KEY));  

  if (localStorageData) {
    refs.email.value = localStorageData.email;
    refs.message.value = localStorageData.message;
  }  
};
getDataFromLocalStorage();