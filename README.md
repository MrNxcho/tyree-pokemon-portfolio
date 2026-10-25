# Tyree Payne — Portfolio Pokédex

Static Pokémon-inspired portfolio with a clickable Pokédex cover and four clearly labeled sections: About me, Experience, Projects, and Contact. No character movement is required.

## Local preview

Run `node server.cjs` and open http://127.0.0.1:4173. No build or dependencies are required.

## Content

- `resume-content.js`: profile, experience, education, cybersecurity community interests, technical skills, interests, and contact links. No phone number is included.
- `project-content.js`: project case study, tools, decisions, report and repository links.
- `assets/tyree-headshot.jpg`: supplied headshot.
- `app.js`: page rendering, navigation, themes and still shiny Mudkip illustration.
- `style.css`: responsive device shell and readable page layouts.
- `music.js`: opt-in Pallet Town soundtrack using the official YouTube player; no audio is downloaded or hosted.

## Navigation and accessibility

Click Open my Pokédex, then choose a section. Large labeled buttons work with mouse, touch, Tab and Enter. Pages use normal document scrolling, visible focus, semantic headings, alternative text, and a skip link. X opens the cover; Z or Escape returns to About me, then closes the device. Keyboard shortcuts are optional. Sound defaults off. Reduced-motion preferences disable hover transitions.

The old `world.js` is retained as a source archive but is no longer loaded. The active experience has no walking, collision, or animation loop.

## Hosting

Static GitHub Pages hosting remains compatible with the existing custom domain and relative asset paths. Production is published at https://tyreepayne.com through the main branch.

Unofficial fan-inspired personal portfolio, unaffiliated with Nintendo, Game Freak or The Pokémon Company. Device artwork and Mudkip are drawn in code. Fonts use Google Fonts with local fallbacks.
