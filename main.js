const form  = document.getElementById('form');

//ERROR HANDLING
const errorName = document.querySelector('.error-name');
const errorSurname = document.querySelector('.error-surname');
const errorEmail = document.querySelector('.error-email');
const errorMessage = document.querySelector('.error-message');
const errorQuery = document.querySelector('.error-query');
const errorConsent = document.querySelector('.error-consent');


const firstName = document.getElementById('name');
const lastName = document.getElementById('surname');
const email = document.getElementById('email');
const radios = document.getElementsByName("query-type");
const message = document.getElementById('user-message');
const consent = document.getElementsByName('terms-condition');

const submit = document.getElementById('submit');



//validate input from 'firstName, lastName, message'
const inputValidate = () => {
  if(firstName.value === ""){
    errorName.style.display = 'block'
  }
  if(lastName.value === ""){
    errorSurname.style.display = 'block'
  }
  if(email.value === ""){
    errorEmail.style.display = 'block'
  }
  if(message.value === ""){
    errorMessage.style.display = 'block'
  }

  setTimeout(() => {
    errorName.style.display = 'none'
    errorSurname.style.display = 'none'
    errorEmail.style.display = 'none'
    errorMessage.style.display = 'none'

  },3000)
}

//validate query type
const queryValidate = () => {
  let valid = false;

  for(let i = 0; i < radios.length; i++){
    if(radios[i].checked){
      valid = true;
      break;
    }
  }

  if(!valid){
    errorQuery.style.display = 'block';
  }
  setTimeout(() => {
    errorQuery.style.display = 'none';
  }, 3000);
}

//validate checkbox from T&Cs
const checkboxValidate = () => {
  let valid = false;

  for(let i = 0; i < consent.length; i++){
    if(consent[i].checked){
      valid = true;
      break
    }
  }

  if(!valid){
    errorConsent.style.display = 'block'
  }
  setTimeout(() => {
    errorConsent.style.display = 'none'
  },3000);
}

function collect(){
  inputValidate();
  queryValidate();
  checkboxValidate();
}

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  collect();
});