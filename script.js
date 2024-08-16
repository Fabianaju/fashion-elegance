// Obtém o ícone do menu e o menu de navegação
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.querySelector('.nav-menu');

// Adiciona um ouvinte de evento para o clique no ícone do menu
menuIcon.addEventListener('click', () => {
    // Alterna a classe 'active' no menu de navegação
    navMenu.classList.toggle('active');
    
    // Alterna a classe 'active' no ícone do menu
    menuIcon.classList.toggle('active');
});

// Controle de carrossel suave
const carousel = document.querySelector('.testemunhos-carousel');

let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
    isDown = false;
});

carousel.addEventListener('mouseup', () => {
    isDown = false;
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // Controle da velocidade de scroll
    carousel.scrollLeft = scrollLeft - walk;
});




