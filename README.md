<div align="center">

# 🌟 Kamalesh Thandi Thirumal - Portfolio

### Modern Portfolio Website Built with Pure HTML, CSS & JavaScript

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge)](https://kamal2305.github.io/HCJ/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A modern, responsive portfolio website featuring smooth animations, interactive elements, and a clean design - all built without any frameworks or build tools.

[View Live Demo](https://kamal2305.github.io/HCJ/) • [Report Bug](https://github.com/kamal2305/HCJ/issues) • [Request Feature](https://github.com/kamal2305/HCJ/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Customization](#-customization)
- [Browser Support](#-browser-support)
- [Contact](#-contact)
- [License](#-license)

## 🎯 Overview

This portfolio website showcases a modern, professional design with engaging animations and interactive elements. Built entirely with vanilla HTML, CSS, and JavaScript, it demonstrates that powerful, beautiful web applications can be created without the complexity of modern frameworks.

**Key Highlights:**
- 🚀 Zero dependencies (except EmailJS for contact form)
- ⚡ Lightning-fast load times (~100KB total)
- 📱 Fully responsive design
- ♿ Accessibility-focused with ARIA labels
- 🎨 Smooth animations and transitions
- 🔍 SEO optimized with meta tags

## ✨ Features

### 🎭 Animations & Effects
- **Loading Screen** - Animated entry with gradient effects
- **Typing Animation** - Dynamic typewriter effect in hero section
- **Scroll Animations** - Elements fade in as you scroll using Intersection Observer
- **Parallax Scrolling** - Depth effect in hero section
- **Hover Effects** - Interactive states on all clickable elements
- **Floating Elements** - Subtle animations on cards

### 🧩 Sections
| Section | Description |
|---------|-------------|
| **Hero** | Eye-catching introduction with animated text and CTA buttons |
| **About** | Personal information with experience stats |
| **Skills** | Technical skills with animated progress bars |
| **Projects** | Portfolio showcase with project details |
| **Contact** | Working contact form with EmailJS integration |
| **Footer** | Social links and copyright information |

### 🎮 Interactive Features
- ✅ Responsive mobile navigation with hamburger menu
- ✅ Dynamic navbar that changes on scroll
- ✅ Smooth scroll navigation between sections
- ✅ Active section highlighting in navigation
- ✅ Functional contact form
- ✅ Scroll-to-top button
- ✅ Animated particle effects

## 🛠 Tech Stack

<table>
<tr>
<td>

**Frontend**
- HTML5 (Semantic markup)
- CSS3 (Flexbox, Grid, Animations)
- JavaScript ES6+ (Vanilla)

</td>
<td>

**Tools & Services**
- Font Awesome 6.4.0
- Google Fonts (Inter, Space Grotesk)
- EmailJS (Contact form)

</td>
</tr>
</table>

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kamal2305/HCJ.git
   cd HCJ
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   open index.html  # macOS
   start index.html # Windows
   xdg-open index.html # Linux
   ```

   Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (if you have http-server installed)
   npx http-server
   ```

3. **Visit** `http://localhost:8000` in your browser

That's it! No build process, no npm install, no configuration required.

## 📁 Project Structure

```
HCJ/
├── index.html              # Main HTML file with all content
├── css/
│   └── styles.css         # All styles, animations, and responsive design
├── js/
│   └── script.js          # All functionality and interactions
├── manifest.json          # PWA manifest
├── sw.js                  # Service worker for PWA
├── .htaccess              # Apache configuration (security headers, caching)
├── robots.txt             # Search engine directives
├── sitemap.xml            # SEO sitemap
└── README.md              # This file
```

## 🔧 Customization

### Update Personal Information

**1. Edit `index.html`:**
- Hero section (lines 170-194): Name, title, description
- About section (lines 204-242): Bio, experience stats
- Skills section (lines 244+): Technical skills and proficiency
- Projects section: Project details and links
- Contact section: Contact information

**2. Configure EmailJS:**

Edit `js/script.js` to use your EmailJS credentials:
```javascript
emailjs.init('YOUR_PUBLIC_KEY');
```

Then update the form handler with your service and template IDs:
```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
```

Sign up at [EmailJS](https://www.emailjs.com/) to get your credentials.

### Modify Styling

**Colors** (`css/styles.css`):
```css
:root {
    --primary-color: #00f0ff;
    --bg-dark: #050814;
    --text-light: #ffffff;
    /* Modify as needed */
}
```

**Fonts** (in `<head>` of `index.html`):
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap">
```

**Animations** (`css/styles.css`):
- Adjust `animation-duration` properties
- Modify `@keyframes` rules
- Change `transition` timing

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | ✅ Latest |
| Firefox | ✅ Latest |
| Safari  | ✅ Latest |
| Edge    | ✅ Latest |
| IE      | ❌ Not supported |

**Required Browser Features:**
- CSS Grid & Flexbox
- CSS Custom Properties
- Intersection Observer API
- ES6+ JavaScript

## 📱 Responsive Design

Optimized breakpoints:
- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Cyan | `#00f0ff` | Accents, highlights |
| Dark Blue | `#050814` | Background |
| White | `#ffffff` | Text, cards |
| Gradient | Various | Backgrounds, effects |

## 📊 Performance

- ⚡ **Load Time**: < 1 second
- 📦 **Total Size**: ~100KB (uncompressed)
- 🎯 **Performance Score**: 95+ (Lighthouse)
- ♿ **Accessibility Score**: 90+ (Lighthouse)
- 🔍 **SEO Score**: 100 (Lighthouse)

## 👤 Contact

**Kamalesh Thandi Thirumal** - Full Stack Developer

- 📧 Email: ttkamalesh123@gmail.com
- 📱 Phone: (+91) 99622 74322
- 📍 Location: Chennai, Tamil Nadu, India
- 💼 LinkedIn: [kamalesh-t-t](https://www.linkedin.com/in/kamalesh-t-t/)
- 🐙 GitHub: [@kamal2305](https://github.com/kamal2305)

## 📄 License

This project is open source and available for anyone to use as a template for their own portfolio. Feel free to fork, modify, and make it your own!

---

<div align="center">

**Built with ❤️ using vanilla HTML, CSS & JavaScript**

*No frameworks, no build tools, no complexity - just pure web development*

[⬆ Back to Top](#-kamalesh-thandi-thirumal---portfolio)

</div>
