# Alex Durand - Research Portfolio

A professional, research-focused personal website built for GitHub Pages.

## Features

- **Dark Forest Green Theme**: Sophisticated academic aesthetic with warm gold accents
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Scroll-triggered reveals and subtle micro-interactions
- **Clean Typography**: Cormorant Garamond paired with Source Sans 3 for a scholarly feel
- **Sections Include**:
  - Hero with introduction
  - About/Bio
  - Research interests
  - Publications list
  - Contact information

## Setup

### GitHub Pages

1. Push this repository to GitHub
2. Go to repository Settings → Pages
3. Under "Source", select the branch (usually `main`) and `/ (root)`
4. Your site will be available at `https://yourusername.github.io/alexddurand/`

### Local Development

Simply open `index.html` in a browser, or use a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js (with http-server)
npx http-server
```

## Customization

### Update Personal Information

Edit `index.html` to replace placeholder content:
- Name and title in the hero section
- Education and affiliations in the About section
- Research areas and descriptions
- Publications with proper citations
- Contact information and social links

### Modify Theme Colors

Edit the CSS variables at the top of `styles.css`:

```css
:root {
    --green-darkest: #0a1612;
    --green-darker: #101f1a;
    --gold: #c9a962;
    --cream: #f5f0e1;
    /* ... */
}
```

### Add a Profile Photo

Replace the placeholder in the hero section:

```html
<div class="hero-placeholder">
    <img src="your-photo.jpg" alt="Alex Durand" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

## File Structure

```
alexddurand/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # Animations and interactivity
└── README.md       # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Feel free to use and modify for your own academic portfolio.

