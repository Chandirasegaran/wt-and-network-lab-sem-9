// Photo Upload Button
const iactualBtn = document.getElementById('img-btn');
const ifileChosen = document.getElementById('img-chosen');
iactualBtn.addEventListener('change', function () {
  ifileChosen.textContent = this.files[0].name
})
// Resume Upload Button
const ractualBtn = document.getElementById('res-btn');
const rfileChosen = document.getElementById('res-chosen');
ractualBtn.addEventListener('change', function () {
  rfileChosen.textContent = this.files[0].name
})


// Phone Number Validation

const phoneInput = document.getElementById('phone');
const plable = document.getElementById('phonelabid');

phoneInput.addEventListener('input', function (event) {
  const sanitizedValue = phoneInput.value.replace(/\D/g, '');
  phoneInput.value = sanitizedValue;
  if (sanitizedValue.length === 10 || sanitizedValue.length === 0) {
    phoneInput.style.borderColor = ''; 
    phoneInput.setCustomValidity(''); 
    plable.innerHTML= 'Phone Number';
    plable.style.color='';
  } else {
    phoneInput.style.borderColor = 'red'; 
    phoneInput.setCustomValidity(''); 
    plable.innerHTML= 'Enter valid Phone Number';
    plable.style.color='red';
  }
});

// Email Validation

const emailInput = document.getElementById('emailinput');
const elabel = document.getElementById('emaillabel');

emailInput.addEventListener('input', function(event)){
  const emailvalue=emailInput.value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(edu|com|net|org|in)$/;
  
}