# Autoflow - AI Automation Website

A modern single-page website about AI Automation built with React, TypeScript, Tailwind CSS, and Vite.

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS
- **Vite** - Lightning-fast build tool
- **Inter Font** - Modern typography from Google Fonts

## Features

- ✨ Animated hero heading with character-by-character stagger
- 🎥 Fixed background video with multiple sections
- 💎 Custom liquid glass morphism effect
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Optimized for performance with Vite
- 🎨 No external UI libraries - pure Tailwind CSS

## Sections

1. **Navbar** - Fixed navigation with logo and CTA
2. **Hero** - Animated heading with action buttons
3. **What is AI Automation?** - Definition with statistics
4. **Use Cases** - 6 real-world automation applications
5. **Tools & Stack** - 8 popular automation tools
6. **Blog Posts** - Featured articles
7. **Newsletter CTA** - Email subscription form
8. **Footer** - Links and copyright

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will open at `http://localhost:5173` with hot module replacement.

### Build

```bash
npm run build
```

Outputs optimized production build to `dist/`.

### Preview

```bash
npm run preview
```

Serves the production build locally for testing.

## Project Structure

```
src/
  ├── components/          # React components
  │   ├── Navbar.tsx
  │   ├── Hero.tsx
  │   ├── WhatIsAI.tsx
  │   ├── UseCases.tsx
  │   ├── ToolsStack.tsx
  │   ├── BlogPosts.tsx
  │   ├── NewsletterCTA.tsx
  │   ├── Footer.tsx
  │   ├── VideoBackground.tsx
  │   ├── AnimatedHeading.tsx
  │   └── FadeIn.tsx
  ├── App.tsx              # Main app component
  ├── main.tsx             # Entry point
  └── index.css            # Global styles & liquid glass effect
```

## Styling

- **Tailwind CSS** - All layout and utilities
- **Custom CSS** - Liquid glass morphism effect and animations
- **Google Fonts** - Inter font family (300, 400, 500, 600 weights)

## Animations

- **Character Animation** - Hero heading with 30ms stagger between characters
- **Fade In** - Elements fade in with configurable delays
- **Hover Effects** - Smooth transitions on buttons and cards

## Customization

### Colors

Edit theme colors in `tailwind.config.ts`. The site uses a clean black and white palette with glass morphism effects.

### Fonts

Change font in `tailwind.config.ts` and `src/index.css`. Currently uses Inter from Google Fonts.

### Content

Edit text content directly in component files (e.g., `src/components/Hero.tsx`).

### Video Background

Update the video URL in `src/components/VideoBackground.tsx`:

```tsx
src="https://your-video-url.mp4"
```

## Browser Support

Modern browsers with support for:
- CSS Grid and Flexbox
- Backdrop-filter (blur effects)
- CSS Variables
- ES2020+

## License

MIT
