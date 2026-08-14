document.addEventListener("DOMContentLoaded", async () => {
    const navbarContainer = document.getElementById("navbar-container");

    if (!navbarContainer) return;

    try {
        const response = await fetch("navbar.html");

        if (!response.ok) {
            throw new Error("Navbar could not be loaded");
        }

        const navbarHTML = await response.text();

        navbarContainer.innerHTML = navbarHTML;

        // Automatically set active navbar link
        setActiveNavbarLink();

    } catch (error) {
        console.error("Navbar loading error:", error);
    }
});


function setActiveNavbarLink() {
    let currentPage = window.location.pathname.split("/").pop();

    // For domain root /
    if (!currentPage) {
        currentPage = "index.html";
    }

    const navLinks = document.querySelectorAll(
        "#navbar-container .navbar-nav > a.nav-link"
    );

    navLinks.forEach((link) => {
        const linkPage = link.getAttribute("href");

        link.classList.remove("active");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });


    // Keep Services active when any service page is open
    const servicePages = [
        "service.html",
        "social-media-marketing.html",
        "performance-marketing.html",
        "seo.html",
        "website-development.html",
        "branding.html",
        "influencer-marketing.html"
    ];

    if (servicePages.includes(currentPage)) {
        const servicesLink = document.querySelector(
            "#navbar-container .dropdown-toggle"
        );

        if (servicesLink) {
            servicesLink.classList.add("active");
        }
    }
}