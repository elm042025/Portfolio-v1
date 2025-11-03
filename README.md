# 🌟 Mohammed Elmongy - Portfolio v1

A modern, responsive portfolio website showcasing my journey from fiber optics engineering to full-stack web development. Built with vanilla HTML, CSS, and JavaScript to demonstrate fundamental web development skills.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://elm042025.github.io/Portfolio-v1/)
[![GitHub](https://img.shields.io/badge/github-repository-blue)](https://github.com/elm042025/Portfolio-v1)

## 🚀 Live Demo

**[View Portfolio →](https://elm042025.github.io/Portfolio-v1/)**

## 📋 Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Sections](#sections)
- [Installation](#installation)
- [Usage](#usage)
- [Performance](#performance)
- [Browser Support](#browser-support)
- [Contact](#contact)
- [License](#license)

## ✨ Features

### Design & UX
- 🎨 **Modern Dark Theme** - Professional color scheme with gradient accents
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- ⚡ **Loading Animation** - Smooth entry animation for enhanced user experience
- 🎭 **Typing Effect** - Dynamic hero section with typewriter animation
- 🌊 **Smooth Animations** - Scroll reveals, hover effects, and transitions
- 🎯 **Interactive Elements** - Parallax effects and micro-interactions

### Functionality
- 🍔 **Mobile Hamburger Menu** - Smooth slide-in navigation for mobile devices
- 📧 **Working Contact Form** - Integrated with FormSubmit for email delivery
- ⬆️ **Scroll to Top Button** - Quick navigation back to the top
- 🔗 **Active Navigation** - Highlights current section while scrolling
- ✅ **Form Validation** - Client-side validation with success messages
- 🎪 **Project Showcases** - Live demos and GitHub links for featured projects

### Technical Features
- ♿ **Accessible** - ARIA labels, semantic HTML, keyboard navigation
- 🔒 **Secure** - NoOpener/NoReferrer on external links
- 🔍 **SEO Optimized** - Meta tags, Open Graph, semantic structure
- 🎯 **Performance** - Minimal dependencies, optimized loading
- 💾 **Modern CSS** - Grid, Flexbox, CSS Variables, dvh units
- 🛠️ **Clean Code** - Well-organized, commented, maintainable

## 🛠️ Technologies

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid, Flexbox, and animations
- **JavaScript (ES6+)** - Vanilla JS for interactions

### Tools & Libraries
- **Google Fonts** - Inter font family
- **FormSubmit** - Contact form handling
- **Git/GitHub** - Version control and hosting
- **GitHub Pages** - Deployment

### APIs & Services
- IntersectionObserver API - Scroll reveal animations
- CSS Variables - Dynamic theming
- Dynamic Viewport Units (dvh) - Mobile-friendly layouts

## 📑 Sections

### 🏠 Hero
- Introduction with animated typing effect
- CTA buttons to projects and contact
- Parallax floating circle decoration

### 👨‍💻 About
- Professional background and transition story
- Development philosophy
- Personal interests

### 💼 Skills
Organized into four categories:
- **Frontend**: HTML5, CSS3, JavaScript, React
- **Backend**: Node.js, Express, REST APIs
- **Tools**: Git, VS Code, npm, DevTools
- **Soft Skills**: Problem-solving, collaboration, communication

### 🚀 Projects
Three featured projects:
1. **Book Voyager** - React app with Gutendex API integration
2. **To-Do List App** - Vanilla JavaScript with local storage
3. **Fjellfilm API** - Full-stack movie review application

### 📬 Contact
- Working contact form with email delivery
- Quick links to Email, LinkedIn, and GitHub
- Success message confirmation

## 💻 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- (Optional) A local web server for development

### Clone Repository
```bash
git clone https://github.com/elm042025/Portfolio-v1.git
cd Portfolio-v1
```

### Local Development

**Option 1: Using VS Code Live Server**
1. Open the project folder in VS Code
2. Install the "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"

**Option 2: Using Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 3: Using Node.js**
```bash
npx serve
```

Then open `http://localhost:8000` in your browser.

## 🎯 Usage

### Customization

**Update Personal Information:**
- Edit `index.html` - Update name, bio, skills, projects
- Modify contact email in the form action

**Change Colors:**
```css
/* In global.css */
:root {
  --bg: #0f172a;        /* Background color */
  --primary: #38bdf8;   /* Primary accent */
  --accent: #34d399;    /* Secondary accent */
}
```

**Add Projects:**
```html
<!-- In index.html, duplicate this structure -->
<div class="project-card card">
  <div class="project-image">
    <img src="./assets/your-image.png" alt="Project description"/>
  </div>
  <div class="project-content">
    <h3>Project Name</h3>
    <p>Description...</p>
    <!-- Add tags and links -->
  </div>
</div>
```

### Contact Form Setup

The contact form uses FormSubmit. On first submission:
1. Fill out and submit the form
2. Check your email for a confirmation link from FormSubmit
3. Click to activate - all future submissions will work automatically

To change the email recipient:
```html
<!-- In index.html -->
<form action="https://formsubmit.co/YOUR-EMAIL@example.com" method="POST">
```

## 📊 Performance

- ⚡ **Fast Load Time** - < 1 second on average
- 📦 **Lightweight** - Minimal dependencies
- 🎯 **Optimized Assets** - Compressed images and fonts
- 🔄 **Smooth Animations** - 60fps transitions
- 📱 **Mobile-First** - Optimized for all devices

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | ✅ Latest |
| Firefox | ✅ Latest |
| Safari  | ✅ Latest |
| Edge    | ✅ Latest |
| Mobile Safari | ✅ iOS 12+ |
| Chrome Mobile | ✅ Latest |

## 📁 Project Structure

```pgsql
Portfolio-v1/
├── index.html          # Main HTML file
├── global.css          # Styles
├── index.js            # JavaScript functionality
├── README.md           # Project documentation
└── assets/             # Images and media
    ├── screenshot gutendex.png
    ├── screenshot To-Do.png
    └── screenshot fjellfilm api.png
```

## 🤝 Contributing

While this is a personal portfolio, feedback and suggestions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📧 Contact

**Mohammed Elmongy**

- 💼 [LinkedIn](https://www.linkedin.com/in/mohammed-s-elmongy-78abb2384)
- 🐙 [GitHub](https://github.com/elm042025)
- 📧 [Email](mailto:mohammed.elmongi@gmail.com)
- 📸 [Instagram](https://www.instagram.com/mohammed.s.elmongy/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons and emojis from Unicode
- Fonts from Google Fonts (Inter)
- FormSubmit for contact form handling

---

<div align="center">
  
**Built with ❤️ by Mohammed Elmongy**

⭐ Star this repo if you found it helpful!

</div>