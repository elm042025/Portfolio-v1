// ===== Loading Animation =====
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-wrapper");
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 1000);
});

// ===== Typing Animation =====
const textToType =
  "From fiber optics to full-stack — building calm, reliable web apps.";
const typedTextElement = document.getElementById("typed-text");
let charIndex = 0;

function typeText() {
  if (charIndex < textToType.length) {
    typedTextElement.textContent += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 50);
  }
}

// Start typing after page load
window.addEventListener("load", () => {
  setTimeout(typeText, 1200);
});

// ===== Hamburger Menu Toggle =====
const hamburger = document.querySelector(".hamburger");
const navLinksMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinksMenu.classList.toggle("active");
});

// Close menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinksMenu.classList.remove("active");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navLinksMenu.contains(e.target)) {
    hamburger.classList.remove("active");
    navLinksMenu.classList.remove("active");
  }
});

// ===== Scroll to Top Button =====
const scrollToTopBtn = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add("visible");
  } else {
    scrollToTopBtn.classList.remove("visible");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ===== Floating Line Parallax Effect =====
document.addEventListener("mousemove", (e) => {
  const line = document.querySelector(".floating-line");
  if (!line) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  line.style.transform = `translate(${x}px, ${y}px)`;
});

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ===== Active Navigation on Scroll =====
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ===== Scroll Reveal Animation =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll(".card, section").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

// ===== Contact Form Handling =====
// Check if form was successfully submitted
window.addEventListener("load", () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("success") === "true") {
    // Show success message
    const successMessage = document.getElementById("successMessage");
    const contactForm = document.querySelector(".contact-form");

    if (successMessage && contactForm) {
      contactForm.style.display = "none";
      successMessage.classList.add("show");

      // Scroll to contact section
      setTimeout(() => {
        document.getElementById("contact").scrollIntoView({
          behavior: "smooth",
        });
      }, 100);

      // Remove success parameter from URL
      window.history.replaceState({}, document.title, window.location.pathname);

      // Reset after 10 seconds
      setTimeout(() => {
        contactForm.style.display = "block";
        successMessage.classList.remove("show");
      }, 10000);
    }
  }
});

// ===== Navbar Background on Scroll =====
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(15, 23, 42, 0.95)";
  } else {
    navbar.style.background = "rgba(15, 23, 42, 0.8)";
  }
});

// ===== Add Active Class to Nav Links =====
const style = document.createElement("style");
style.textContent = `
  .nav-links a.active {
    color: var(--primary);
  }
`;
document.head.appendChild(style);
