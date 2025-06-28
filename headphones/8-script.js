const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle('show');
});