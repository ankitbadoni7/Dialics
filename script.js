//navabr dropdown
const dropdowns = document.querySelectorAll('.nav-links .dropdown');

dropdowns.forEach(drop => {
    const link = drop.querySelector('a');
    const arrow = link.querySelector('img');
    const panel = drop.querySelector('.dropdown-panel');

    // Show panel + swap arrow on hover
    drop.addEventListener('mouseenter', () => {
        panel.style.display = 'block';           // show panel
        arrow.src = 'Images/arrowDown.svg';      // arrow down
    });

    // Hide panel + revert arrow on hover out
    drop.addEventListener('mouseleave', () => {
        panel.style.display = 'none';            // hide panel
        arrow.src = 'Images/arrow.svg';          // default arrow
    });
});

//