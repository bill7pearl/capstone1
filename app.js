const mobileMenuToggle = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
function showMobileMenu() {
mobileMenu.style.display = 'flex';
closeIcon.style.display = 'block'
}

const closeIcon = document.getElementById('close-icon');
function closeMobileMenu() {
    mobileMenu.style.display = 'none';
    closeIcon.style.display = 'none'
}