# MapMyFinance Website Customization Guide

## 🎯 Quick Start

The website is now running at `http://localhost:5173/`

To build for production, run:
```bash
npm run build
```

## 🔧 Customization Guide

### 1. Update Company Information

Edit each component to replace placeholder content:

#### Navbar (src/components/Navbar.tsx)
- Change logo text "MapMyFinance"
- Update navigation links and menu items
- Modify phone number in CTA button

#### Hero (src/components/Hero.tsx)
- Update main headline and subheading
- Change tagline and description
- Customize feature bullets
- Update CTA button text and actions

#### Services (src/components/Services.tsx)
- Modify service titles and descriptions
- Update service icons (from lucide-react)
- Add or remove service cards

#### Testimonials (src/components/Testimonials.tsx)
- Update client names and positions
- Change testimonial text
- Modify ratings and locations
- Update achievement stats

#### About (src/components/About.tsx)
- Update company description
- Customize mission, vision, and values
- Modify feature checklist

#### CTA (src/components/CTA.tsx)
- Update call-to-action headlines
- Modify contact form fields
- Change contact methods (phone, email, calendar)

#### Footer (src/components/Footer.tsx)
- Update company description
- Modify quick links
- Update service list
- Change contact information
- Update social media links

### 2. Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    500: '#0ea5e9',
    600: '#0284c7',  // Main brand color
    700: '#0369a1',
    900: '#082f49',
  },
  secondary: {
    500: '#10b981',  // Accent color
    600: '#059669',
  },
  accent: {
    500: '#f59e0b',  // Highlight color
    600: '#d97706',
  },
}
```

### 3. Update Fonts

The website uses system fonts. To add a custom font:

**Step 1**: Add font import in `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
```

**Step 2**: Update `tailwind.config.ts`:
```typescript
fontFamily: {
  sans: ['Poppins', 'sans-serif'],
}
```

### 4. Modify Sections

#### Add a New Section
1. Create new component in `src/components/NewSection.tsx`
2. Import in `src/App.tsx`
3. Add to the JSX:
```jsx
<NewSection />
```

#### Remove a Section
1. Delete the component file
2. Remove import from `App.tsx`
3. Remove JSX element from App

### 5. Update Links and Navigation

**Internal Links** (smooth scroll):
```jsx
<a href="#services">Services</a>
```

**External Links**:
```jsx
<a href="https://example.com" target="_blank">Link</a>
```

**Phone Links**:
```jsx
<a href="tel:+919876543210">Call Now</a>
```

**Email Links**:
```jsx
<a href="mailto:info@example.com">Email Us</a>
```

### 6. Add Images

Replace emoji placeholders with actual images:

1. Add images to `public/` folder
2. Import and use in components:
```jsx
<img src="/images/hero-illustration.png" alt="Hero" />
```

### 7. Customize Form

Edit the contact form in `src/components/CTA.tsx`:

```jsx
<form onSubmit={handleSubmit} className="space-y-4">
  <input
    type="text"
    placeholder="Your Full Name"
    name="name"
    required
    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
  />
  {/* Add more fields as needed */}
</form>
```

### 8. Change Service Icons

Icons come from `lucide-react`. View all available icons:
https://lucide.dev/

Change in `src/components/Services.tsx`:
```jsx
import {
  BarChart3,      // Change these imports
  FileText,
  Building2,
  // ... more icons
} from 'lucide-react'
```

### 9. Responsive Design

The website is mobile-responsive using Tailwind breakpoints:

- `sm:` - Small (640px)
- `md:` - Medium (768px)
- `lg:` - Large (1024px)
- `xl:` - Extra Large (1280px)

Example:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

### 10. Add Animations

Custom animations are defined in `tailwind.config.ts`:

```typescript
animation: {
  fadeIn: 'fadeIn 0.5s ease-in-out',
  slideUp: 'slideUp 0.5s ease-out',
}
```

Use in components:
```jsx
<div className="animate-fadeIn">Content</div>
```

## 📱 Mobile Optimization

Tips for improving mobile experience:

1. **Touch-friendly buttons**: Minimum 48px height
2. **Readable text**: Minimum 16px font size
3. **Proper spacing**: Use padding/margin utilities
4. **Mobile menu**: Already included in Navbar
5. **Images**: Use responsive images
6. **Forms**: Large input fields, good spacing

## 🎨 Design Best Practices

1. **Color Consistency**: Use the primary, secondary, and accent colors
2. **Typography Hierarchy**: Use h1, h2, h3 tags appropriately
3. **White Space**: Don't overcrowd - use padding/margins
4. **Hover States**: All interactive elements have hover effects
5. **Accessibility**: Use semantic HTML, proper labels, good contrast

## 🔐 SEO Optimization

Suggestions to improve SEO:

1. **Update meta tags** in `index.html`:
```html
<meta name="description" content="Your company description">
<meta name="keywords" content="keyword1, keyword2">
<meta name="author" content="Your Name">
```

2. **Add Open Graph tags**:
```html
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Description">
<meta property="og:image" content="/og-image.png">
```

3. **Proper heading structure**: Use h1, h2, h3 in order
4. **Alt text for images**: Always add descriptive alt text
5. **Mobile-friendly**: Already optimized
6. **Fast loading**: Vite ensures good performance

## 📦 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized `dist/` folder.

### Deploy Options

**Netlify**:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**Vercel**:
```bash
npm install -g vercel
vercel --prod
```

**GitHub Pages**:
See Vite documentation: https://vitejs.dev/guide/static-deploy.html

**Traditional Server**:
Upload contents of `dist/` folder to your web server.

## 🐛 Troubleshooting

### Development server won't start
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Components not rendering
- Check imports are correct
- Verify component files exist
- Check console for errors

### Styling not applied
- Verify Tailwind class names
- Run `npm install`
- Check `tailwind.config.ts`

### Images not showing
- Ensure images are in `public/` folder
- Check file paths
- Verify file extensions

## 📚 Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Vite Guide](https://vitejs.dev/guide)
- [Lucide Icons](https://lucide.dev)

## 🚀 Next Steps

1. Customize company information
2. Replace placeholder content
3. Update colors and branding
4. Add real images
5. Set up form backend (Formspree, netlify-forms, etc.)
6. Deploy to your hosting platform
7. Set up domain name
8. Add SSL certificate

## 💡 Tips

- Use VS Code with Tailwind CSS IntelliSense extension
- Use React DevTools browser extension for debugging
- Test on mobile devices before deployment
- Optimize images before adding to website
- Use real testimonials and case studies
- Keep content fresh and updated

---

**Need help? Check component files for implementation examples.**
