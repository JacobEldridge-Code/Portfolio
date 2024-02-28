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

// observer to add a reveal and hide effect on sections // 

document.addEventListener('DOMContentLoaded' , () => {
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal')
            } else {
                entry.target.classList.remove('reveal')
            }
        })
    },{
        threshold: 0.32,
        rootMargin:'0px'
    })
    let hiddenElements = document.querySelectorAll('.hidden') 
    hiddenElements.forEach(el => observer.observe(el))
});

// Contact form //

