const hamMenu = document.querySelector('.ham-menu');


hamMenu.addEventListener('click' , () => {
    let navBar = document.querySelector('.header-right');
    navBar.classList.toggle('active');
    hamMenu.classList.toggle('active');
});

function closeMenu ()  {
    let navBar = document.querySelector('.header-right');
    navBar.classList.remove('active');
    hamMenu.classList.remove('active');
}

const links = document.querySelectorAll('.header-right .link');

links.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu(); 
    });
});
