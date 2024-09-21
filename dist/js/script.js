// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.remove('absolute');
        header.classList.add('fixed');
        header.classList.add('fixed-style');
    } else {
        header.classList.remove('fixed');
        header.classList.add('absolute');
        header.classList.remove('fixed-style')
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});
