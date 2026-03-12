// Navbar dropdown logic for all dropdown menus
const dropdowns = document.querySelectorAll('.nav-links .dropdown');

dropdowns.forEach(drop => {
    const link = drop.querySelector('a');
    const arrow = link.querySelector('img');
    const panel = drop.querySelector('.dropdown-panel');
    let timer;

    // Show panel + swap arrow + change link color
    drop.addEventListener('mouseenter', () => {
        clearTimeout(timer);
        
        // Only proceed if a panel exists for this dropdown
        if (panel) {
            panel.style.display = 'block';
        }
        
        if (arrow) {
            arrow.src = 'Images/arrowDown.svg';
        }
        
        // Set active color to link
        link.style.color = 'rgba(250, 122, 119, 1)'; 
    });

    // Hide everything with a slight delay to ensure stability
    drop.addEventListener('mouseleave', () => {
        timer = setTimeout(() => {
            if (panel) {
                panel.style.display = 'none';
            }
            
            if (arrow) {
                arrow.src = 'Images/arrow.svg';
            }
            
            // Revert link color
            link.style.color = ''; 
        }, 150);
    });
});

// Hide all open panels immediately when the user scrolls
window.addEventListener('scroll', () => {
    dropdowns.forEach(drop => {
        const link = drop.querySelector('a');
        const arrow = link.querySelector('img');
        const panel = drop.querySelector('.dropdown-panel');

        if (panel) {
            panel.style.display = 'none';
        }
        
        if (arrow) {
            arrow.src = 'Images/arrow.svg';
        }
        
        link.style.color = ''; 
    });
});


//passowrd visiblity
const toggles = document.querySelectorAll(".toggle-password");

toggles.forEach(icon => {

    const input = icon.previousElementSibling;

    icon.addEventListener("mousedown", () => {
        input.type = "text";
    });

    icon.addEventListener("mouseup", () => {
        input.type = "password";
    });

    icon.addEventListener("mouseleave", () => {
        input.type = "password";
    });

});

//HAMBYRGER ICON

// hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', (e) => {
    navLinks.classList.toggle('active');
    e.stopPropagation(); // prevent document click from closing immediately
});

// close nav if clicking outside
document.addEventListener('click', (e) => {

    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove('active');
    }

});

// navbar hide on scroll down
let lastScroll = 0;

window.addEventListener("scroll", () => {

    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        navLinks.classList.remove("active");
    }

    lastScroll = currentScroll;

});
