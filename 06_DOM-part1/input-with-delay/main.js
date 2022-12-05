document.addEventListener('DOMContentLoaded', function () {
  let input = document.createElement('input');
  input.type = 'text';
  input.id = 'user-input';
  document.body.append(input);
  let h2 = document.createElement('h2');
  h2.textContent = '';
  h2.className = 'user-text';
  document.body.append(h2);

  let timer = null;

  function typeText() {
    h2.textContent = input.value;
  }

  function startTypeText() {
    timer = setTimeout(typeText, 300);
  }

  function stopTypeText() {
    clearTimeout(timer);
  }

  document.getElementById('user-input').addEventListener('input', stopTypeText);
  input.addEventListener('input', startTypeText);
});
