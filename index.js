// ===== Language Translation System =====
const translations = {
  no: {
    nav: {
      about: "Om meg",
      skills: "Ferdigheter",
      projects: "Prosjekter",
      contact: "Kontakt",
    },
    hero: {
      typing:
        "Fra fiberoptikk til full-stack — bygger rolige, pålitelige webapper.",
      viewProjects: "Se prosjekter",
      getInTouch: "Ta kontakt",
    },
    about: {
      title: "Om meg",
      p1: "Hei! Jeg er Mohammed — en utvikler med bakgrunn fra fiberoptikk. Etter 12 år innen telekom, gikk jeg over til webutvikling for å kombinere min tekniske presisjon med kreativ problemløsning.",
      p2: "Min tilnærming til koding er metodisk og detaljorientert. Jeg fokuserer på å skrive ren, vedlikeholdbar kode og lage brukeropplevelser som føles intuitive, rolige og målrettede.",
      p3: "Når jeg ikke koder, utforsker jeg vanligvis nye teknologier, kjører langt for å ta mitt neste favoritbilde, eller tar igjen favorittseriene mine.",
      p4: "Jeg bygger for tiden prosjekter som kobler teknologi med reell menneskelig påvirkning — og ser alltid etter muligheter til å vokse og samarbeide.",
    },
    skills: {
      title: "Ferdigheter & Teknologier",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Verktøy",
      softSkills: "Myke ferdigheter",
      softSkillsList: [
        "Problemløsning",
        "Teamsamarbeid",
        "Kommunikasjon",
        "Kontinuerlig læring",
      ],
    },
    projects: {
      title: "Utvalgte prosjekter",
      liveDemo: "Live demo",
      github: "GitHub",
    },
    contact: {
      title: "Ta kontakt",
      intro:
        "Jeg er alltid åpen for nye muligheter og interessante prosjekter. Ta gjerne kontakt hvis du vil jobbe sammen!",
      name: "Navn",
      namePlaceholder: "Ola Nordmann",
      email: "E-post",
      emailPlaceholder: "ola.nordmann@eksempel.no",
      message: "Melding",
      messagePlaceholder: "Melding her...",
      send: "Send melding",
      successTitle: "Melding sendt!",
      successMessage:
        "Takk for at du tok kontakt. Jeg kommer tilbake til deg snart!",
    },
    footer: {
      rights: "Alle rettigheter forbeholdt.",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      typing:
        "From fiber optics to full-stack — building calm, reliable web apps.",
      viewProjects: "View Projects",
      getInTouch: "Get in touch",
    },
    about: {
      title: "About Me",
      p1: "Hi! I'm Mohammed — a developer with a background in fiber optics engineering. After 12 years in telecom, I transitioned into web development to combine my technical precision with creative problem-solving.",
      p2: "My approach to coding is methodical and detail-oriented. I focus on writing clean, maintainable code and crafting user experiences that feel intuitive, calm, and purposeful.",
      p3: "When I'm not coding, I'm usually exploring new technologies, driving off to capture my next favorite photograph, or catching up on my favorite shows.",
      p4: "I'm currently building projects that connect technology with real human impact — and always looking for opportunities to grow and collaborate.",
    },
    skills: {
      title: "Skills & Technologies",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools",
      softSkills: "Soft Skills",
      softSkillsList: [
        "Problem Solving",
        "Team Collaboration",
        "Communication",
        "Continuous Learning",
      ],
    },
    projects: {
      title: "Featured Projects",
      liveDemo: "Live Demo",
      github: "GitHub",
    },
    contact: {
      title: "Get In Touch",
      intro:
        "I'm always open to new opportunities and interesting projects. Feel free to reach out if you'd like to work together!",
      name: "Name",
      namePlaceholder: "John Doe",
      email: "Email",
      emailPlaceholder: "john.doe@example.com",
      message: "Message",
      messagePlaceholder: "Message here...",
      send: "Send Message",
      successTitle: "Message Sent Successfully!",
      successMessage: "Thank you for reaching out. I'll get back to you soon!",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};

let currentLang = "no"; // Default to Norwegian

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("preferredLanguage", lang);

  const t = translations[lang];

  // Update navigation
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const keys = element.getAttribute("data-i18n").split(".");
    let translation = t;
    keys.forEach((key) => {
      translation = translation[key];
    });
    if (translation) element.textContent = translation;
  });

  // Update sections without data-i18n
  const aboutSection = document.querySelector("#about");
  if (aboutSection) {
    aboutSection.querySelector("h2").textContent = t.about.title;
    const paragraphs = aboutSection.querySelectorAll("p");
    if (paragraphs[0]) paragraphs[0].textContent = t.about.p1;
    if (paragraphs[1]) paragraphs[1].textContent = t.about.p2;
    if (paragraphs[2]) paragraphs[2].textContent = t.about.p3;
    if (paragraphs[3]) paragraphs[3].textContent = t.about.p4;
  }

  // Update skills section
  const skillsSection = document.querySelector("#skills");
  if (skillsSection) {
    skillsSection.querySelector("h2").textContent = t.skills.title;
    const skillCards = skillsSection.querySelectorAll(".skill-card h3");
    if (skillCards[0]) skillCards[0].textContent = t.skills.frontend;
    if (skillCards[1]) skillCards[1].textContent = t.skills.backend;
    if (skillCards[2]) skillCards[2].textContent = t.skills.tools;
    if (skillCards[3]) {
      skillCards[3].textContent = t.skills.softSkills;
      const softSkillsLi = skillCards[3].parentElement.querySelectorAll("li");
      t.skills.softSkillsList.forEach((skill, i) => {
        if (softSkillsLi[i]) softSkillsLi[i].textContent = skill;
      });
    }
  }

  // Update projects section
  const projectsSection = document.querySelector("#projects");
  if (projectsSection) {
    projectsSection.querySelector("h2").textContent = t.projects.title;
    document
      .querySelectorAll(".btn-primary:not(.btn-disabled)")
      .forEach((btn) => {
        if (btn.closest(".project-links")) {
          btn.textContent = t.projects.liveDemo;
        }
      });
    document.querySelectorAll(".btn-ghost").forEach((btn) => {
      if (btn.closest(".project-links")) {
        btn.textContent = t.projects.github;
      }
    });
  }

  // Update contact section
  const contactSection = document.querySelector("#contact");
  if (contactSection) {
    contactSection.querySelector("h2").textContent = t.contact.title;
    contactSection.querySelector(".contact-intro").textContent =
      t.contact.intro;

    const labels = contactSection.querySelectorAll("label");
    if (labels[0]) labels[0].textContent = t.contact.name;
    if (labels[1]) labels[1].textContent = t.contact.email;
    if (labels[2]) labels[2].textContent = t.contact.message;

    const inputs = contactSection.querySelectorAll(
      'input[type="text"], input[type="email"], textarea'
    );
    if (inputs[0]) inputs[0].placeholder = t.contact.namePlaceholder;
    if (inputs[1]) inputs[1].placeholder = t.contact.emailPlaceholder;
    if (inputs[2]) inputs[2].placeholder = t.contact.messagePlaceholder;

    const submitBtn = contactSection.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.textContent = t.contact.send;

    const successTitle = contactSection.querySelector(".success-message h3");
    const successMsg = contactSection.querySelector(".success-message p");
    if (successTitle) successTitle.textContent = t.contact.successTitle;
    if (successMsg) successMsg.textContent = t.contact.successMessage;
  }

  // Update footer
  const footer = document.querySelector(".footer p");
  if (footer) {
    footer.textContent = `© 2025 Mohammed Elmongy. ${t.footer.rights}`;
  }

  // Update language toggle icon
  const langIcon = document.querySelector(".lang-icon");
  if (langIcon) {
    langIcon.textContent = lang === "no" ? "🇬🇧" : "🇳🇴";
  }

  // Update typing text
  updateTypingText(t.hero.typing);

  // Update HTML lang attribute
  document.documentElement.lang = lang === "no" ? "no" : "en";
}

// Initialize language on page load
window.addEventListener("load", () => {
  const savedLang = localStorage.getItem("preferredLanguage") || "no";
  setLanguage(savedLang);
});

// Language toggle button
document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.querySelector(".lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const newLang = currentLang === "no" ? "en" : "no";
      setLanguage(newLang);
    });
  }
});

// ===== Loading Animation =====
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-wrapper");
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 1000);
});

// ===== Typing Animation =====
let textToType =
  "Fra fiberoptikk til full-stack — bygger rolige, pålitelige webapper.";
const typedTextElement = document.getElementById("typed-text");
let charIndex = 0;
let typingTimeout;

function typeText() {
  if (charIndex < textToType.length) {
    typedTextElement.textContent += textToType.charAt(charIndex);
    charIndex++;
    typingTimeout = setTimeout(typeText, 50);
  }
}

function updateTypingText(newText) {
  // Clear existing timeout
  if (typingTimeout) {
    clearTimeout(typingTimeout);
  }

  // Reset and start new typing
  textToType = newText;
  charIndex = 0;
  if (typedTextElement) {
    typedTextElement.textContent = "";
    setTimeout(typeText, 100);
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
// document.querySelectorAll(".card, section").forEach((el) => {
//   el.style.opacity = "0";
//   el.style.transform = "translateY(30px)";
//   el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
//   observer.observe(el);
// });

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

// ===== Skills Carousel Dots =====
const skillsGrid = document.querySelector(".skills-grid");
const skillsDots = document.querySelectorAll(".skills-dots .dot");

// Update active dot based on scroll position
function updateSkillsDots() {
  if (!skillsGrid || window.innerWidth > 768) return;

  const scrollLeft = skillsGrid.scrollLeft;
  const cardWidth = skillsGrid.querySelector(".skill-card").offsetWidth;
  const gap = 24; // 1.5rem gap
  const activeIndex = Math.round(scrollLeft / (cardWidth + gap));

  skillsDots.forEach((dot, index) => {
    if (index === activeIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Listen to scroll events on skills grid
if (skillsGrid) {
  skillsGrid.addEventListener("scroll", updateSkillsDots);

  // Click on dots to scroll to corresponding card
  skillsDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      const cardWidth = skillsGrid.querySelector(".skill-card").offsetWidth;
      const gap = 24;
      const scrollTo = index * (cardWidth + gap);

      skillsGrid.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    });
  });
}

// ===== Projects Carousel Dots =====
const projectsGrid = document.querySelector(".projects-grid");
const projectsDots = document.querySelectorAll(".projects-dots .dot");

// Update active dot based on scroll position
function updateProjectsDots() {
  if (!projectsGrid || window.innerWidth > 768) return;

  const scrollLeft = projectsGrid.scrollLeft;
  const cardWidth = projectsGrid.querySelector(".project-card").offsetWidth;
  const gap = 24; // 1.5rem gap
  const activeIndex = Math.round(scrollLeft / (cardWidth + gap));

  projectsDots.forEach((dot, index) => {
    if (index === activeIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Listen to scroll events on projects grid
if (projectsGrid) {
  projectsGrid.addEventListener("scroll", updateProjectsDots);

  // Click on dots to scroll to corresponding card
  projectsDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      const cardWidth = projectsGrid.querySelector(".project-card").offsetWidth;
      const gap = 24;
      const scrollTo = index * (cardWidth + gap);

      projectsGrid.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    });
  });
}
