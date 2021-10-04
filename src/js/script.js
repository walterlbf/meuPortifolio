const navMenu = document.getElementById('navMenu'),
    navToggle = document.getElementById('navToggle'),
    navClose = document.getElementById('navClose');

// exibir menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        console.log('entrei no exibir menu')
        navMenu.classList.add('showMenu');
    });
}

// esconder menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('showMenu');
    });
}

// remove o menu ao clicar em um item
const navLink = document.querySelectorAll('.navLink');

function linkAction() {
    const navMenu = document.getElementById('navMenu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('showMenu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));
