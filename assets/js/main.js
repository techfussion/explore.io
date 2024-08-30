// Constants for viewport breakpoints and image paths
const TABLET_BREAKPOINT = 768;
const MOBILE_IMAGE = 'assets/images/image 15.png';
const DESKTOP_IMAGE = 'assets/images/image 16.png';

function updateImageBasedOnViewport() {
    const img = document.getElementById('dashboard-image');
    const viewportWidth = window.innerWidth;

    if (viewportWidth <= TABLET_BREAKPOINT) {
        img.src = MOBILE_IMAGE;
    } else {
        img.src = DESKTOP_IMAGE;
    }
}

// Initial update
updateImageBasedOnViewport();

// Add event listener for resize
window.addEventListener('resize', updateImageBasedOnViewport);
