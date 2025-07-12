# Webflow Agency Landing Page

A modern, responsive landing page template for Webflow agencies, built with React, TypeScript, and Tailwind CSS. This site features a clean UI, dynamic sections, and a consistent design system.

## Features
- Hero section with full background image
- Edge-to-edge navbar with background image
- Preview, Statistics, Pricing, Testimonials, Contact, and Final CTA sections
- Consistent light navy blue background (#EEF2FF) for all main sections except Hero and Footer
- Footer with white background
- Responsive design for desktop and mobile
- Modern card layouts, gradients, and interactive elements

## Tech Stack
- React
- TypeScript
- Tailwind CSS
- Vite

## Folder Structure
```
src/
  App.tsx            # Main app layout
  assets/            # Images and icons
  components/        # All page sections as React components
    Header.tsx
    Hero.tsx
    Preview.tsx
    Statistics.tsx
    Pricing.tsx
    Testimonials.tsx
    FinalCTA.tsx
    Contact.tsx
    Footer.tsx
  index.css          # Global styles
  main.tsx           # App entry point
```

## Getting Started
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) to view the site.

## Customization
- Update images in `src/assets/` for your agency branding.
- Edit section content in `src/components/` as needed.
- Change colors and layout using Tailwind classes in each component.

## Deployment
You can deploy this site to Vercel, Netlify, or any static hosting provider that supports Vite/React.

## License
MIT

