# Raameen Ahmed - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript featuring a dark theme with light pink accents and glowing hover effects.

## 🎨 Features

- **Dark Theme**: Sleek black background with light pink accents
- **Glowing Effects**: Interactive hover animations with pink glow effects
- **Responsive Design**: Fully responsive across all devices
- **Smooth Scrolling**: Continuous scroll experience with smooth navigation
- **Interactive Elements**: Hover effects, animations, and particle effects
- **Modern UI**: Clean, professional design with modern typography
- **Contact Form**: Functional contact form with validation
- **Mobile-Friendly**: Hamburger menu for mobile devices

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. The website should load with all features working

### Local Development
To run the website locally:
```bash
# If you have Python installed
python -m http.server 8000

# If you have Node.js installed
npx serve .

# Or simply open index.html in your browser
```

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎯 Customization Guide

### Colors
The color scheme is defined in CSS variables at the top of `styles.css`:

```css
:root {
    --primary-bg: #0a0a0a;        /* Main background */
    --secondary-bg: #111111;      /* Secondary background */
    --accent-pink: #ff69b4;       /* Main pink accent */
    --accent-pink-light: #ff8ac0; /* Light pink */
    --accent-pink-dark: #e91e63;  /* Dark pink */
    /* ... other variables */
}
```

### Content Updates

#### Personal Information
Update the following sections in `index.html`:
- **Hero Section**: Name, title, and description
- **About Section**: Personal bio and statistics
- **Contact Information**: Email, phone, social links

#### Experience & Projects
- **Experience Section**: Update job history, dates, and achievements
- **Projects Section**: Add your projects with descriptions and links
- **Skills Section**: Modify technical skills and categories

#### Contact Details
Update contact information in the contact section:
```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <a href="mailto:your-email@example.com">your-email@example.com</a>
</div>
```

### Adding New Sections
To add a new section:

1. Add HTML structure in `index.html`
2. Add corresponding CSS in `styles.css`
3. Add any JavaScript functionality in `script.js`

### Images
Replace the placeholder profile image:
1. Add your image to the project folder
2. Update the `about-image` section in `index.html`
3. Replace the `<i class="fas fa-user-circle"></i>` with an `<img>` tag

## 🌟 Features Explained

### Glowing Hover Effects
The glowing effects are achieved through CSS `text-shadow` and `box-shadow` properties:

```css
.skill-item:hover i {
    text-shadow: 0 0 20px var(--glow-color);
}
```

### Smooth Animations
Animations are powered by CSS transitions and JavaScript Intersection Observer:

```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});
```

### Particle Effects
Floating particles are created dynamically with JavaScript:

```javascript
function createParticle() {
    const particle = document.createElement('div');
    // Particle styling and animation
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **768px**: Tablet and mobile devices
- **480px**: Small mobile devices

Key responsive features:
- Mobile hamburger menu
- Responsive grid layouts
- Flexible typography
- Touch-friendly interactions

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to [Netlify](https://netlify.com)
2. Your site will be deployed instantly
3. Custom domain can be added in settings

### Vercel
1. Connect your GitHub repository to [Vercel](https://vercel.com)
2. Deploy automatically on every push
3. Get a custom domain and SSL certificate

## 🛠️ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them with the community!

## 📞 Support

If you need help customizing your portfolio or have questions, feel free to reach out!

---

**Built with ❤️ and lots of pink glow effects** 