
/* Mobile navigation */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
});

/* Close mobile menu after clicking a link */
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

/* Automatically display the current year */
document.getElementById("currentYear").textContent =
    new Date().getFullYear();

/* Contact form validation */
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formStatus.textContent = "Please fill in all fields.";
        return;
    }

    formStatus.textContent =
        "Your form is valid! To send messages, connect this form to an email service.";

    contactForm.reset();
});

// Animate sections and cards when they appear on screen
const animatedElements = document.querySelectorAll(
    ".section, .hero-content, .hero-image, .card, .skills-container"
);

const motionPreference = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);

if ("IntersectionObserver" in window && !motionPreference.matches) {
    animatedElements.forEach(function (element) {
        element.classList.add("reveal");
    });

    const observer = new IntersectionObserver(
        function (entries, observerInstance) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observerInstance.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    animatedElements.forEach(function (element) {
        observer.observe(element);
    });
}

/* NEW SECTIONS: SCROLL REVEAL */

const studentCards = document.querySelectorAll(
  ".journey-profile, .learning-roadmap, .hobby-card"
);

if ("IntersectionObserver" in window) {
  studentCards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(22px)";
    card.style.transition =
      "opacity 0.65s ease, transform 0.65s ease";
  });

  const studentObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  studentCards.forEach(card => studentObserver.observe(card));
} else {
  studentCards.forEach(card => {
    card.style.opacity = "1";
    card.style.transform = "none";
  });
}

