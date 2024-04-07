// Get menu icon, sidebar, and menu logo
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');
const menuLogo = document.querySelector('.menu-logo');

// Toggle sidebar and show/hide menu logo
function toggleSidebar() {
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-300px';
        menuIcon.style.opacity = '1'; // Restore menu icon opacity
        menuLogo.style.display = 'none'; // Hide menu logo
    } else {
        sidebar.style.left = '0px';
        menuIcon.style.opacity = '0'; // Fade out menu icon
        menuLogo.style.display = 'block'; // Show menu logo
    }
}

document.addEventListener('click', function(event) {
    if (!sidebar.contains(event.target) && event.target !== menuIcon) {
        sidebar.style.left = '-300px';
        menuIcon.style.opacity = '1'; // Restore menu icon opacity
        clearSidebar(); // Clear sidebar content when hiding
    }
});