document.getElementById('submit').addEventListener('click', () => {
  const input = document.getElementById('input');
  const value = input.value.trim();

  const result = document.querySelector('.result');
  result.innerHTML = '';
  if (!value) return;
  input.value = '';
  const spinner = document.getElementById('spinner');
  spinner.classList.remove('hide');

  fetch(`/data?data=${value}`)
    .then((body) => body.json())
    .then((json) => {
      const newHeader = document.createElement('h1');
      newHeader.textContent = json.morsecode;
      result.appendChild(newHeader);
      spinner.classList.add('hide');
    })
    .catch((err) => {
      throw err;
    });
});
