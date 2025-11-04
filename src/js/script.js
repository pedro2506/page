const mobileButton = document.querySelector('.btn-mobile');

const navLinks = document.querySelector('#nav-links');
const icon = document.querySelector('btn-mobile i');

mobileButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    icon.classList.toggle('fa-times');
    icon.classList.toggle('fa-bar');

});