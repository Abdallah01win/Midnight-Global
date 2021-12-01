const hamNav = document.getElementById('ham');
const navLinks = document.getElementById('nav-links');
hamNav.addEventListener('click', () => {
    navLinks.classList.toggle('hidden-nav');
    hamNav.classList.toggle('close-icon');
})