const hamburger_icon = document.querySelector('#nav-bar .nav-bar .nav-list .hamburger');
const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');

const links = document.querySelector('#nav-bar .nav-bar .nav-list ul li a');

for (const a of document.querySelectorAll('#nav-bar .nav-bar .nav-list ul li a')) {
    a.addEventListener('click', () => {
        nav_list.classList.remove('open');
        hamburger_icon.classList.remove('active');
    })
}

hamburger_icon.addEventListener('click', () => {
    nav_list.classList.toggle('open');
    hamburger_icon.classList.toggle('active');
})