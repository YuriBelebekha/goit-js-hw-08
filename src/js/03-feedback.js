import throttle from "lodash.throttle";

const refs = {
  form: document.querySelector('.feedback-form'),  
}

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
  let feedbackFormData = localStorage.getItem(STORAGE_KEY);
  
  feedbackFormData = feedbackFormData ? JSON.parse(feedbackFormData) : {};  
  feedbackFormData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormData));  
};

function getDataFromLocalStorage() {
  let localStorageData = localStorage.getItem(STORAGE_KEY);  

  if (localStorageData) {
    localStorageData = JSON.parse(localStorageData);
    
    for (const [key, value] of Object.entries(localStorageData)) {      
      refs.form.elements[key].value = value;      
    }    
  }
};
getDataFromLocalStorage();




