const input = document.getElementById('input');
const result = document.querySelector('.result');
const spinner = document.getElementById('spinner');

function showErrorAlert(message) {
  const alert = document.querySelector('.alert-danger');
  alert.innerHTML = '';
  alert.innerHTML = message;
  alert.classList.remove('hide');
}

function removeErrorAlert() {
  const alert = document.querySelector('.alert-danger');
  alert.classList.add('hide');
}

function showTranslatedResult(morseCode) {
  const newHeader = document.createElement('h1');
  newHeader.textContent = morseCode;
  result.appendChild(newHeader);
  result.classList.remove('hide');
}

function removeTranslatedResult() {
  result.innerHTML = '';
  result.classList.add('hide');
}

function showSpinner() {
  spinner.classList.remove('hide');
}

function hideSpinner() {
  spinner.classList.add('hide');
}

document.getElementById('submit').addEventListener('click', () => {
  const value = input.value.trim();
  removeErrorAlert();
  removeTranslatedResult();
  if (!value) {
    showErrorAlert('Please enter a text before submitting');
    return;
  }
  input.value = '';
  showSpinner();
  fetch(`/data?data=${value}`)
    .then((body) => {
      const { status } = body;
      if (status === 408) {
        throw new Error('Server time out error');
      }
      if (status !== 200) {
        throw new Error('Server error');
      }
      return body.json();
    })
    .then((json) => {
      if (!json) throw new Error('Json error');
      showTranslatedResult(json.morsecode);
      hideSpinner();
    })
    .catch((err) => {
      hideSpinner();
      showErrorAlert(err.message);
    });
});

document.querySelector('.sendMail').addEventListener('click', (e) => {
  e.preventDefault();
});
