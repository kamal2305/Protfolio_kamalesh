# Portfolio Website - Vanilla HTML, CSS, and JavaScript

This is a complete recreation of the React portfolio website using only **HTML**, **CSS**, and **JavaScript**. It includes all the same features, animations, and functionality as the original React version.

## 🌟 Features

### Animations & Effects
- ✨ **Loading Screen** - Animated loading screen with gradient background
- ⌨️ **Typing Animation** - Typewriter effect in hero section
- 🎨 **Smooth Scroll** - Smooth scrolling between sections
- 📊 **Skill Bars** - Animated progress bars with shimmer effect
- 🎭 **Fade-in Animations** - Elements fade in as you scroll
- 🔄 **Hover Effects** - Interactive hover animations on cards and buttons
- 📱 **Responsive Design** - Fully responsive on all devices
- 🚀 **Scroll to Top** - Animated button to scroll back to top
- 🎯 **Active Navigation** - Navigation links highlight based on scroll position
- 💫 **Floating Cards** - Subtle floating animation on profile cards
- ⚡ **Parallax Effect** - Parallax scrolling in hero section

### Sections
1. **Hero Section** - Eye-catching introduction with gradient background
2. **About Section** - Personal information with stats
3. **Skills Section** - Technical skills with animated progress bars
4. **Projects Section** - Featured projects showcase
5. **Contact Section** - Contact form with EmailJS integration
6. **Footer** - Simple footer with copyright

### Interactive Elements
- 📱 **Mobile Menu** - Hamburger menu for mobile devices
- 📧 **Contact Form** - Working contact form using EmailJS
- 🔗 **Social Links** - Links to social media profiles
- 🎨 **Dynamic Navbar** - Navbar changes style on scroll
- 👆 **Smooth Interactions** - All buttons and links have smooth transitions

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with:
  - Flexbox & Grid layouts
  - CSS animations and transitions
  - Gradient backgrounds
  - Custom properties
  - Media queries for responsiveness
- **JavaScript (ES6+)** - Vanilla JavaScript for:
  - DOM manipulation
  - Intersection Observer API for scroll animations
  - Event listeners
  - EmailJS integration
  - Smooth scrolling
  - Dynamic content loading

## 📦 External Dependencies

- **Font Awesome 6.4.0** - Icons
- **Google Fonts (Poppins)** - Typography
- **EmailJS** - Email service for contact form

## 🚀 How to Use

1. Simply open `index.html` in any modern web browser
2. No build process or dependencies to install
3. No server required - runs completely in the browser

## 📁 File Structure

```
HCJ/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All CSS styles and animations
├── js/
│   └── script.js       # All JavaScript functionality
└── README.md           # This file
```

## 🎨 Color Scheme

- Primary Blue: `#1e3a8a` / `#3b82f6`
- Dark: `#1e1e1e` / `#000000`
- Light: `#ffffff` / `#f8fafc`
- Gradient combinations throughout

## ⚙️ Configuration

### EmailJS Setup
The contact form uses EmailJS. The current configuration includes:
- Service ID: `service_r37vfqa`
- Template ID: `template_80vp888`
- Public Key: `42f2whhFbMsvCPjxl`

To use your own EmailJS account:
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the credentials in `js/script.js`

## 📱 Responsive Breakpoints

- Desktop: `> 768px`
- Tablet: `768px`
- Mobile: `480px`

## ✨ Key Animations

1. **Loading Animation** - 2 second loading screen with fade out
2. **Typing Effect** - 80ms per character in hero section
3. **Scroll Animations** - Elements fade in when 30% visible
4. **Skill Bars** - Animated progress bars with 1.5s duration
5. **Hover Effects** - Smooth scale and translate transforms
6. **Floating Cards** - 4 second infinite float animation
7. **Parallax** - Hero content moves at different speeds

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ Internet Explorer (not supported)

## 📝 Features from React Version

All features from the original React portfolio have been recreated:
- ✅ Framer Motion animations → CSS animations + Intersection Observer
- ✅ React Router smooth scrolling → Native smooth scroll
- ✅ React hooks (useState, useEffect) → Vanilla JavaScript
- ✅ React Icons → Font Awesome
- ✅ Component structure → Organized HTML sections
- ✅ EmailJS integration → Same service, vanilla JS
- ✅ All styling → Pure CSS

## 🔧 Customization

### Personal Information
Update the following in `index.html`:
- Name, title, description in Hero section
- About me text
- Skills and skill levels
- Project details
- Contact information
- Social media links

### Styling
All styles are in `css/styles.css`:
- Colors: Modify CSS custom properties
- Fonts: Change Google Fonts import
- Animations: Adjust animation durations and effects
- Layout: Modify grid and flexbox properties

### Functionality
All JavaScript is in `js/script.js`:
- Typing speed: Change `typingSpeed` variable
- Loading duration: Modify timeout in loading screen
- Animation thresholds: Adjust Intersection Observer options
- EmailJS configuration: Update service/template IDs

## 📄 License

This is a personal portfolio project. Feel free to use it as a template for your own portfolio!

## 👤 Author

**Kamalesh Thandi Thirumal**
- Email: ttkamalesh123@gmail.com
- Phone: (+91) 99622 74322
- Location: Chennai, Tamil Nadu, India
- GitHub: [kamal2305](https://github.com/kamal2305)
- LinkedIn: [kamalesh-t-t](https://www.linkedin.com/in/kamalesh-t-t/)

## 🎯 Performance

- ⚡ Fast load time (no framework overhead)
- 📦 Small file size (~100KB total)
- 🚀 No build process required
- ✨ Smooth 60fps animations
- 📱 Mobile-optimized

---

**Note**: This is a vanilla HTML/CSS/JavaScript recreation of a React portfolio. It demonstrates that modern, interactive websites can be built without frameworks while maintaining excellent performance and user experience.
