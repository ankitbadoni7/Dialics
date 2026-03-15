/* ================= NAVBAR DROPDOWN (DESKTOP) ================= */

const dropdowns = document.querySelectorAll('.nav-links .dropdown');

dropdowns.forEach(drop => {

    const link = drop.querySelector('a');
    const arrow = link.querySelector('img');
    const panel = drop.querySelector('.dropdown-panel');

    let timer;

    drop.addEventListener('mouseenter', () => {

        if (window.innerWidth <= 768) return;

        clearTimeout(timer);

        if (panel) panel.classList.add("active");
        if (arrow) arrow.src = "Images/arrowDown.svg";

        link.style.color = "rgba(250, 122, 119, 1)";

    });

    drop.addEventListener('mouseleave', () => {

        if (window.innerWidth <= 768) return;

        timer = setTimeout(() => {

            if (panel) panel.classList.remove("active");
            if (arrow) arrow.src = "Images/arrow.svg";

            link.style.color = "";

        }, 150);

    });

});


/* ================= PASSWORD VISIBILITY ================= */

const toggles = document.querySelectorAll(".toggle-password");

toggles.forEach(icon => {

    const input = icon.previousElementSibling;

    icon.addEventListener("mousedown", () => input.type = "text");
    icon.addEventListener("mouseup", () => input.type = "password");
    icon.addEventListener("mouseleave", () => input.type = "password");

});


/* ================= HAMBURGER MENU ================= */

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', (e) => {

    navLinks.classList.toggle('active');
    e.stopPropagation();

    if (navLinks.classList.contains("active") && window.innerWidth <= 768) {
        resetMobileMenu();
    }

});


/* ================= CLOSE MENU WHEN CLICKING OUTSIDE ================= */

document.addEventListener('click', (e) => {

    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove('active');
    }

});


/* ================= MOBILE DROPDOWN SYSTEM ================= */

const dropdownItems = document.querySelectorAll(".nav-links .dropdown");
const backButtons = document.querySelectorAll(".mobile-back");
const allNavLis = document.querySelectorAll(".nav-links > ul > li");
const allPanels = document.querySelectorAll(".dropdown-panel");

dropdownItems.forEach(item => {

    const link = item.querySelector("a");
    const panel = item.querySelector(".dropdown-panel");

    link.addEventListener("click", (e) => {

        if (window.innerWidth > 768 || !panel) return;

        e.preventDefault();
        e.stopPropagation();

        closeAllPanels();

        allNavLis.forEach(li => li.style.display = "none");

        item.style.display = "block";
        panel.style.display = "block";

    });

});


/* ================= MOBILE BACK BUTTON ================= */

backButtons.forEach(btn => {

    btn.addEventListener("click", (e) => {

        e.preventDefault();
        e.stopPropagation();

        resetMobileMenu();

    });

});


/* ================= SCROLL BEHAVIOUR ================= */

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        navLinks.classList.remove("active");
    }

    closeDesktopDropdowns();
    resetMobileMenu();

    lastScroll = currentScroll;

});


/* ================= UTILITY FUNCTIONS ================= */

function closeDesktopDropdowns() {

    dropdowns.forEach(drop => {

        const link = drop.querySelector('a');
        const arrow = link.querySelector('img');
        const panel = drop.querySelector('.dropdown-panel');

        if (panel) panel.classList.remove("active");
        if (arrow) arrow.src = "Images/arrow.svg";

        link.style.color = "";

    });

}

function closeAllPanels() {

    allPanels.forEach(panel => {
        panel.style.display = "none";
    });

}

function resetMobileMenu() {

    if (window.innerWidth > 768) return;

    closeAllPanels();

    allNavLis.forEach(li => {
        li.style.display = "block";
    });

}