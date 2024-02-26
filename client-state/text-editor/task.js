const editor = document.getElementById('editor');
editor.value = localStorage.getItem('editor');
const btn = document.getElementById('clear');

editor.addEventListener('input', () => {
  localStorage.setItem('editor', editor.value);
});

btn.addEventListener('click', () => {
  localStorage.removeItem('editor');
  editor.value = '';
});