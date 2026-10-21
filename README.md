# Tyree Payne — Kanto portfolio

A responsive, original pixel-art portfolio inspired by the color and interface of Pokémon FireRed / LeafGreen. Built with HTML, CSS, and JavaScript; no build step required.

## Preview

Run `node server.cjs` and open http://localhost:4173. Or serve this folder with any static server.

## Content

Edit `sections` in `app.js` to replace the clearly labeled placeholder content with Tyree’s bio, projects and experience. The contact section currently links only to the verified GitHub account. No fabricated resume details or nonfunctional download buttons are included.

## Features

- Original canvas town with clickable destinations
- Accessible modal sections, keyboard focus return and Escape to close
- LeafGreen / FireRed palette switch
- Optional synthesized menu sounds (off by default)
- Responsive mobile layout and reduced-motion support

## GitHub Pages

In repository Settings → Pages, choose **Deploy from a branch**, `main`, `/ (root)`, then Save. This site uses relative paths and works under a repository URL. The `.nojekyll` file bypasses Jekyll.

The artwork is drawn in code. No game ROM, ripped sprites, or game audio is included. This is an unofficial fan-inspired personal portfolio, unaffiliated with Nintendo, Game Freak or The Pokémon Company. Fonts are loaded from Google Fonts with local system fallbacks.

## Walkable town

Click the town to give it keyboard focus. Move with arrow keys or WASD, then face a door, sign, character, or item and press E / Space / Enter. On mobile, hold the directional pad and tap A. Buildings, fences, water, items, and map edges have collision. Doors open About, Experience, and Projects; the resident at the east side opens Contact. Signs and hidden notes show dialogue. Portfolio menu buttons also remain available below the game.

The tile map and movement engine are in `world.js`. All visual assets are original code-drawn pixel art, inspired by the supplied handheld-game reference.

## Full-screen adventure

The world now fills the browser with a player-following camera, destination labels, a dismissible welcome, and a portfolio menu (M). The map extends into a southern garden. Desktop keyboard movement works while exploring; menus pause movement and Escape returns to the town. Touchscreen directional controls and an A interaction button overlay the world. Content remains clearly marked as awaiting Tyree’s resume.
