function onToggleMenu() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const navLinksMobile = document.querySelector('.nav-links-mobile');

    hamburgerIcon.classList.toggle('open');
    navLinksMobile.classList.toggle('open');
}