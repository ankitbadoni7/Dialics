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


document.addEventListener("DOMContentLoaded", function () {

    // 🚀 GLOBAL CHECK FIRST (VERY IMPORTANT)
    if (window.innerWidth > 850) return;

    function enableInfiniteSwipe(wrapperSelector, rowSelector) {

        const wrapper = document.querySelector(wrapperSelector);
        const slider = document.querySelector(rowSelector);
        if (!wrapper || !slider) return;

        const originalCards = Array.from(slider.children);
        const cardCount = originalCards.length;

        // Clone cards for looping
        const firstClone = originalCards[0].cloneNode(true);
        const lastClone = originalCards[cardCount - 1].cloneNode(true);

        slider.appendChild(firstClone);
        slider.insertBefore(lastClone, slider.firstChild);

        let currentIndex = 1;
        let isDragging = false;
        let startX = 0;
        let isTransitioning = false;

        const updatePosition = (animate = true) => {
            const slideWidth = wrapper.clientWidth;
            slider.style.transition = animate ? "transform 0.4s ease-out" : "none";
            slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        };

        updatePosition(false);

        slider.addEventListener('transitionend', () => {
            isTransitioning = false;

            if (currentIndex === 0) {
                currentIndex = cardCount;
                updatePosition(false);
            } 
            else if (currentIndex === cardCount + 1) {
                currentIndex = 1;
                updatePosition(false);
            }
        });

        wrapper.addEventListener("touchstart", (e) => {
            if (isTransitioning) return;
            startX = e.touches[0].clientX;
            isDragging = true;
        });

        wrapper.addEventListener("touchmove", (e) => {
            if (!isDragging || isTransitioning) return;

            let currentX = e.touches[0].clientX;
            let diff = startX - currentX;

            if (Math.abs(diff) > 50) {
                isTransitioning = true;

                if (diff > 0) currentIndex++;
                else currentIndex--;

                updatePosition(true);
                isDragging = false;
            }
        });

        wrapper.addEventListener("touchend", () => {
            isDragging = false;
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 850) return;
            updatePosition(false);
        });
    }

    enableInfiniteSwipe(".top-row-wrapper", ".top-row");
    enableInfiniteSwipe(".bottom-row-wrapper", ".bottom-row");
});