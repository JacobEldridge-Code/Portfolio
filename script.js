const hamMenu = document.querySelector('.ham-menu');
const leftSide = document.querySelector('.name');

hamMenu.addEventListener('click' , () => {
    let navBar = document.querySelector('.header-right');
    navBar.classList.toggle('active');
    hamMenu.classList.toggle('active');
    leftSide.classList.toggle('active');
});

function closeMenu ()  {
    let navBar = document.querySelector('.header-right');
    navBar.classList.remove('active');
    hamMenu.classList.remove('active');
    leftSide.classList.remove('active');
};

let links = document.querySelectorAll('.header-right .link');
let nameLink = document.querySelector('.name');

links.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu(); 
    });
});

nameLink.addEventListener('click', () => {
    closeMenu();
});