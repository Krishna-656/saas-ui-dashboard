# krishna-reddy-ui-dashboard-assignment-v4

This v4 project includes pixel-focused Tailwind tokens (typography & spacing tuned), skeleton loaders with fake timeouts, improved accessibility, sidebar tooltips, scroll-to-top, and Orders functionality.


## What I changed in v4 (high level)
- Applied approximate Figma tokens for font sizes, spacing, and radii in tailwind.config.cjs
- Added Skeleton components and simulated loading delays to demonstrate loaders
- Added empty state for Orders and improved keyboard/accessibility support
- Sidebar shows tooltips when collapsed
- Scroll-to-top button for long pages
- SPA navigation persists theme and sidebar state in localStorage

## Run locally
1. Extract the zip and open the folder in VS Code.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the URL shown by Vite (usually http://localhost:5173).

## Next polish (optional)
- Replace icons with exact SVGs from Figma for perfect visual match.
- Pull exact font weights & letter-spacing from Figma inspect panel (if you share them) to reach 100% pixel-perfect.
- Add unit tests (Jest + React Testing Library) for Orders functionality.
