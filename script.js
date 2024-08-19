function toggleMenu () {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

const popoverContainer = document.querySelector('.popover-container');
const popoverContent = document.querySelector('.popover-content');

popoverContainer.addEventListener('mouseenter', () => {
    popoverContent.style.display = 'block';
});

popoverContainer.addEventListener('mouseleave', () => {
    popoverContent.style.display = 'none';
});