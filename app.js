import Router from "./services/Router.js";

// Link my Web Components
import { HomePage } from "./components/HomePage.js";
import { AboutPage } from "./components/AboutPage.js";
import { ConnectPage } from "./components/ConnectPage.js";
import { ProjectsPage } from "./components/ProjectsPage.js";

// It's better to wait for the event for manipulation
window.app = {};
app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
  app.router.init();

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const overlay = document.querySelector(".overlay");

  function toggleMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    overlay.classList.toggle("active");

    // Update ARIA attributes
    const isExpanded = hamburger.classList.contains("active");
    hamburger.setAttribute("aria-expanded", isExpanded);
    navMenu.setAttribute("aria-hidden", !isExpanded);

    // Prevent body scrolling when menu is open
    document.body.style.overflow = isExpanded ? "hidden" : "";
  }

  hamburger.addEventListener("click", toggleMenu);

  // Close menu when clicking overlay
  overlay.addEventListener("click", toggleMenu);

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      !hamburger.contains(e.target) &&
      !navMenu.contains(e.target) &&
      navMenu.classList.contains("active")
    ) {
      toggleMenu();
    }
  });
  // Handle keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("active")) {
      toggleMenu();
    }
  });

  // Handle nav links
  const navLinks = document.querySelectorAll(".navlink");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("active")) {
        toggleMenu();
      }
    });
  });
});
