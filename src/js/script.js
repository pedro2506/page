const mobileButton = document.querySelector('.btn-mobile');

const navLinks = document.querySelector('#nav-links');
// CORREÇÃO: Adicionado o ponto '.' para selecionar a classe '.btn-mobile'
const icon = document.querySelector('.btn-mobile i');

mobileButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    
    // CORREÇÃO: Trocado 'fa-bar' por 'fa-bars' para o ícone de menu
    icon.classList.toggle('fa-times');
    icon.classList.toggle('fa-bars');
});
