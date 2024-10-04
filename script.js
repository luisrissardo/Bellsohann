// Get the div element
const div = document.getElementById('nome');
const header = document.querySelector('header')
// Define the scroll position threshold
const threshold = 500;

window.addEventListener('scroll', () => {
    div.classList.toggle('hidden', window.scrollY > threshold);
    header.classList.toggle('off', window.scrollY > threshold);
  });