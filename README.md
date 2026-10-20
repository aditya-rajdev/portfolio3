# Balasagar — Cinematic Video Editor Portfolio

A responsive, full-length portfolio website inspired by the supplied reference screenshot. This is a colorful reinterpretation using warm paper, black, signal orange, electric blue, lime and lilac.

## Features
- Responsive desktop, tablet and mobile layouts
- Full scrolling portfolio with hero, stats, intro, selected work, services, quote, process and contact sections
- Animated reveals and hero entrance using GSAP + ScrollTrigger
- Project category filters and project detail modals
- Showreel modal placeholder
- Contact form that opens the visitor's default email app
- Central project and service content in `src/data.ts`

## Run locally
1. Install Node.js 18+.
2. Extract this ZIP and open the project folder in a terminal.
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL shown by Vite.

## Build
```bash
npm run build
npm run preview
```

## Customize before publishing
- Replace the sample portrait and project images in `src/App.tsx` and `src/data.ts` with your own licensed images.
- Update the name, social links, email address and project copy.
- Replace the showreel placeholder with your YouTube/Vimeo embed.
- The CV link currently scrolls to the About section. Replace it with your real PDF CV URL.
- The project numbers and stats are demo copy. Update them to match your real experience.
- The contact form uses a `mailto:` link; connect a form service or backend if you want submissions without opening an email client.

Images are remote Unsplash URLs and need an internet connection. Verify image licenses and replace them as appropriate before commercial use.
