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