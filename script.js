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
document.addEventListener('DOMContentLoaded', function() {
    const phoneNumber = document.getElementById('phoneNumber');
    
    phoneNumber.addEventListener('click', function(event) {
        event.preventDefault();
        copyToClipboard(this.textContent);
    });

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log("Text copied to clipboard");
                Swal.fire({
                    icon: 'success',
                    title: 'Copied!',
                    text: 'Phone number has been copied to clipboard.',
                    timer: 2000,
                    showConfirmButton: false
                });
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to copy phone number.',
                });
            });
    }
});