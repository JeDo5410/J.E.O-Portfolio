// Hamburger Transition
function toggleMenu () {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}


// Select all popover containers
const popoverContainers = document.querySelectorAll('.popover-container');

// Iterate over each popover container
popoverContainers.forEach(container => {
    const popoverContent = container.querySelector('.popover-content');
    
    container.addEventListener('mouseenter', () => {
        popoverContent.style.display = 'block';
    });

    container.addEventListener('mouseleave', () => {
        popoverContent.style.display = 'none';
    });
});

// Alert Modal
function showAlert() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This feature is currently under development! ",
    });
}

// Copy phone number 
function copyToClipboard(event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('phoneNumber').textContent;
    navigator.clipboard.writeText(phoneNumber).then(() => {
        alert('Phone number copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}