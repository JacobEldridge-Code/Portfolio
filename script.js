const hamMenu = document.querySelector('.ham-menu');


hamMenu.addEventListener('click' , () => {
    let navBar = document.querySelector('.header-right');
    navBar.classList.toggle('active');
    hamMenu.classList.toggle('active');
});

document.querySelectorAll('.ham-menu').forEach(n => n.addEventListener('click', () => {
    hamMenu.classList.remove('active');
    navBar.classList.remove('active');
}));