// Existing dropdown logic
const dropdowns = document.querySelectorAll('.nav-links .dropdown');

dropdowns.forEach(drop => {
    const link = drop.querySelector('a');
    const arrow = link.querySelector('img');
    const panel = drop.querySelector('.dropdown-panel');
    let timer;

    drop.addEventListener('mouseenter', () => {
        clearTimeout(timer);
        panel.style.display = 'block';
        if(arrow) arrow.src = 'Images/arrowDown.svg';
        link.style.color = 'rgba(250, 122, 119, 1)'; 
    });

    drop.addEventListener('mouseleave', () => {
        timer = setTimeout(() => {
            panel.style.display = 'none';
            if(arrow) arrow.src = 'Images/arrow.svg';
            link.style.color = ''; 
        }, 150);
    });
});

// NEW: Hide panel on scroll
window.addEventListener('scroll', () => {
    dropdowns.forEach(drop => {
        const link = drop.querySelector('a');
        const arrow = link.querySelector('img');
        const panel = drop.querySelector('.dropdown-panel');

        // Force hide everything immediately
        panel.style.display = 'none';
        if(arrow) arrow.src = 'Images/arrow.svg';
        link.style.color = ''; 
    });
});