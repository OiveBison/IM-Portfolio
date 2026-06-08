//JS powered nav-menu
document.addEventListener("DOMContentLoaded", () => {
    renderNavigation();
});

function renderNavigation() {
    const navContainer = document.getElementById("global-nav");
    
    if (navContainer) {
        // removed the duplicate logo from here so it doesn't clash with  HTML logo
        navContainer.innerHTML = `
            <button class="hamburger" id="hamburger-btn" aria-label="Toggle menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
            <ul class="nav-links" id="nav-links-list">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="works.html">Works</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        `;
        
        // Activate our hamburger menu logic immediately after loading render
        setupHamburgerMenu();
    }
}
function setupHamburgerMenu() {
    const hamburger = document.getElementById("hamburger-btn");
    const navLinks = document.getElementById("nav-links-list");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            // active class toggle class on both elements
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
        });
    }
}

