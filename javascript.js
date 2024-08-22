const menuToggle = document.getElementById('menutoggle');
const navLinks = document.getElementById('navlinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
});