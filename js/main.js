
document.addEventListener("DOMContentLoaded", () => {
    // 1. Render the shared navigation menu
    renderNavigation();
    
    // 2. Activate the works page filtering system
    setupProjectFilters();
    
    //3.Activate the contact form validation engine
    setupFormValidation();
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


// Interaction 2: WORKS Filter System

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

//Interaction 3: Form Validation and error message
function setupFormValidation() {
    const form = document.getElementById("contactForm");
    const errorDiv = document.getElementById("error-message");

    // Safety check: stop immediately if we aren't on the contact page
    if (!form || !errorDiv) return;

    form.addEventListener("submit", (event) => {
        const name = document.getElementById("fullName").value.trim();
        const email = document.getElementById("emailInput").value.trim();
        const message = document.getElementById("messageInput").value.trim();
        
        let errors = [];

        // 1. Simple validation checks
        if (name.length < 3) {
            errors.push("Please enter your full name and surname.");
        }
        if (message.length < 10) {
            errors.push("Your message must be at least 10 characters long.");
        }

        // 2. Check if errors exist
        if (errors.length > 0) {
            event.preventDefault(); // Stop form from submitting or refreshing page
            errorDiv.innerHTML = errors.join("<br>"); // Display errors neatly
            errorDiv.style.color = "#ff4d4d"; //  red style reminder
        } else {
            // Successful! 
            event.preventDefault(); // Stop actual server submit for prototype purposes
            errorDiv.innerHTML = "Message sent successfully! Thank you.";
            errorDiv.style.color = "#2ecc71"; // Change text color to green
            form.reset(); // Clear the form fields
        }
    });
}