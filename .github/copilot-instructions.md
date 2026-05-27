# Autoflow AI Automation Website - Setup Instructions

A modern single-page website about AI Automation built with React, TypeScript, Tailwind CSS, and Vite.

## Project Status

✅ Project successfully scaffolded and configured

## Quick Start

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

This starts the dev server at `http://localhost:5173` with hot module replacement enabled.

### Build for Production

```bash
npm run build
```

Outputs optimized files to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Tech Stack Overview

- **React 18** - Component-based UI framework
- **TypeScript** - Type-safe JavaScript for better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Modern, lightning-fast build tool
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixes

## Project Structure

```
motionsite/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── Navbar.tsx       # Fixed navigation bar
│   │   ├── Hero.tsx         # Hero section with animations
│   │   ├── WhatIsAI.tsx     # AI Automation definition section
│   │   ├── UseCases.tsx     # 6 use case cards
│   │   ├── ToolsStack.tsx   # 8 tool cards
│   │   ├── BlogPosts.tsx    # 3 featured blog posts
│   │   ├── NewsletterCTA.tsx # Email subscription CTA
│   │   ├── Footer.tsx       # Footer with links
│   │   ├── VideoBackground.tsx # Fixed background video
│   │   ├── AnimatedHeading.tsx # Character animation component
│   │   └── FadeIn.tsx       # Fade in animation component
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles (liquid glass, fonts)
├── index.html               # HTML entry with Google Fonts
├── vite.config.ts           # Vite configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── postcss.config.mjs       # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Key Features

### Animations
- **Character-by-character hero heading** - 30ms stagger with fade-in and slide effect
- **Fade in elements** - Configurable delay system for smooth reveals
- **Hover states** - Smooth transitions on cards and buttons

### Design Elements
- **Liquid glass morphism** - Custom CSS with backdrop-filter blur effect
- **Fixed video background** - Video streams behind all sections
- **Alternating section transparency** - Transparent and semi-opaque sections
- **Responsive grid layouts** - Mobile, tablet, desktop breakpoints

### Sections
1. **Hero** - Animated heading, subheading, CTA buttons, and glass tag
2. **What is AI?** - Definition with 3 stat cards (80%, 3.5x, $15T)
3. **Use Cases** - 6 cards with emoji icons and descriptions
4. **Tools & Stack** - 8 tool cards with descriptions
5. **Blog Posts** - 3 featured articles with colored headers
6. **Newsletter CTA** - Email input with subscription button
7. **Footer** - Logo, navigation links, copyright

## Styling Details

### Colors
- **Background** - Pure black (`bg-black`)
- **Text** - White (primary), gray-300 (secondary), gray-400 (tertiary)
- **Borders** - white/20 (default), white/40 (hover)
- **Buttons** - White bg with black text (primary), glass morphism (secondary)

### Fonts
- **Family** - Inter (300, 400, 500, 600 weights)
- **Imported from** - Google Fonts
- **Applied globally** - Via Tailwind config and CSS

### Liquid Glass Effect
- Semi-transparent dark background
- Backdrop blur (4px)
- Inset highlight with border gradient
- Smooth hover state transitions

## Customization Guide

### Changing the Background Video
Edit `src/components/VideoBackground.tsx`:
```tsx
src="https://your-new-video-url.mp4"
```

### Updating Content
Each component has its content defined within the component. Edit directly:
- Hero text → `src/components/Hero.tsx`
- Use cases → `src/components/UseCases.tsx`
- Blog posts → `src/components/BlogPosts.tsx`
- etc.

### Modifying Colors
Update the Tailwind theme in `tailwind.config.ts`:
```ts
theme: {
  extend: {
    colors: {
      // Add custom colors here
    }
  }
}
```

### Changing Fonts
1. Update Google Fonts link in `index.html`
2. Update `tailwind.config.ts` fontFamily
3. Update CSS in `src/index.css`

## Development Workflow

1. **Run dev server** - `npm run dev`
2. **Make changes** - Edit components in `src/components/`
3. **Hot reload** - Changes reflect instantly in the browser
4. **Build & test** - `npm run build` then `npm run preview`

## Browser Compatibility

- Modern browsers with CSS Grid, Flexbox, Backdrop-filter
- ES2020+ JavaScript
- No IE11 support

## Performance Notes

- Built with Vite for ultra-fast HMR
- Optimized CSS with Tailwind
- Video background is fixed positioning (no reflow)
- Minimal JavaScript - mostly markup and CSS

## Next Steps

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Open browser to `http://localhost:5173`
4. Edit components and see live changes
5. Build for production: `npm run build`

For detailed information, see [README.md](../README.md).
