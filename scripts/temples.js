// Set current year in footer
document.getElementById('currentyear').textContent = new Date().getFullYear();
        
// Set last modified date
document.getElementById('lastModified').textContent = `Last Updated: ${document.lastModified}`;

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menuButton");
    const navMenu = document.getElementById("nav-menu");
    
    if (menuButton && navMenu) {
        // Toggle menu on button click
        menuButton.addEventListener("click", function(e) {
            e.stopPropagation();
            navMenu.classList.toggle("active");
            
            // Update ARIA state
            const isExpanded = navMenu.classList.contains("active");
            menuButton.setAttribute("aria-expanded", isExpanded);
        });
        
        // Close menu when clicking outside
        document.addEventListener("click", function(e) {
            if (!e.target.closest(".navigation")) {
                navMenu.classList.remove("active");
                menuButton.setAttribute("aria-expanded", "false");
            }
        });
        
        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll("a");
        navLinks.forEach(function(link) {
            link.addEventListener("click", function() {
                navMenu.classList.remove("active");
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }
});