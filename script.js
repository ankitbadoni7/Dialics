// Navbar dropdown logic for all dropdown menus
const dropdowns = document.querySelectorAll('.nav-links .dropdown');

dropdowns.forEach(drop => {
    const link = drop.querySelector('a');
    const arrow = link.querySelector('img');
    const panel = drop.querySelector('.dropdown-panel');
    let timer;

    // Show panel + swap arrow + change link color
    drop.addEventListener('mouseenter', () => {
        if (window.innerWidth <= 480) return;
        clearTimeout(timer);
        
        if (panel) {
            panel.style.display = 'block';
        }
        
        if (arrow) {
            arrow.src = 'Images/arrowDown.svg';
        }
        
        link.style.color = 'rgba(250, 122, 119, 1)'; 
    });

    drop.addEventListener('mouseleave', () => {
        if (window.innerWidth <= 480) return;
        timer = setTimeout(() => {
            if (panel) {
                panel.style.display = 'none';
            }
            
            if (arrow) {
                arrow.src = 'Images/arrow.svg';
            }
            
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


// password visibility
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


// HAMBURGER ICON
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', (e) => {
    navLinks.classList.toggle('active');
    e.stopPropagation();
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



/* ================= MOBILE DROPDOWN & BACK BUTTON ================= */

const dropdownItems = document.querySelectorAll(".nav-links .dropdown");
const backButtons = document.querySelectorAll(".mobile-back");
const allNavLis = document.querySelectorAll(".nav-links > ul > li");

dropdownItems.forEach(item => {

    const link = item.querySelector("a");
    const panel = item.querySelector(".dropdown-panel");

    link.addEventListener("click", function(e) {

        if (window.innerWidth <= 480 && panel) {

            e.preventDefault();
            e.stopPropagation();

            // close any previously open panels
            document.querySelectorAll(".dropdown-panel").forEach(p=>{
                p.style.display = "none";
            });

            // hide all menu items
            allNavLis.forEach(li=>{
                li.style.display = "none";
            });

            // show current dropdown
            item.style.display = "block";
            panel.style.display = "block";

        }

    });

});


backButtons.forEach(btn => {

    btn.addEventListener("click", function(e) {

        e.preventDefault();
        e.stopPropagation();

        // close all panels
        document.querySelectorAll(".dropdown-panel").forEach(panel=>{
            panel.style.display = "none";
        });

        // show all menu items again
        allNavLis.forEach(li=>{
            li.style.display = "block";
        });

    });

});


/* FIX: reset menu when scrolling */

window.addEventListener("scroll", () => {

    if(window.innerWidth <= 480){

        document.querySelectorAll(".dropdown-panel").forEach(panel=>{
            panel.style.display = "none";
        });

        allNavLis.forEach(li=>{
            li.style.display = "block";
        });

    }

});