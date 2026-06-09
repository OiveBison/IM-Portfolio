
document.addEventListener("DOMContentLoaded", () => {
    // 1. Render the shared navigation menu
    renderNavigation();
    
    // 2. Activate the works page filtering system
    setupProjectFilters();
});


// NAVIGATION SYSTEM
function renderNavigation() {
    const navContainer = document.getElementById("global-nav");
    if (navContainer) {
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
        setupHamburgerMenu();
    }
}

function setupHamburgerMenu() {
    const hamburger = document.getElementById("hamburger-btn");
    const navLinks = document.getElementById("nav-links-list");
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
        });
    }
}


// INTERACTION 2: WORKS Filter System

function setupProjectFilters() {
    const buttons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".project-card");

    // If we aren't on the works page, stop running immediately
    if (buttons.length === 0 || cards.length === 0) return;

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const filterValue = btn.getAttribute("data-filter");

            cards.forEach(card => {
                // Check classes on  HTML cards
                const hasClassMatch = card.classList.contains(filterValue);
                
                // Special match for 4th custom card
                const hasDataMatch = card.getAttribute("data-category") === "ux" && filterValue === "development";

                if (filterValue === "all" || hasClassMatch || hasDataMatch) {
                    card.style.styleKey = ""; // Clear any custom inline styles safely
                    card.style.setProperty("display", "block", "important");
                } else {
                    card.style.setProperty("display", "none", "important");
                }
            });
        });
    });
}