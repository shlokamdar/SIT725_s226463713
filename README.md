# SIT725_s226463713# SIT725_s226463713 — Applied Software Engineering

**Student:** Shloka Hitesh Kamdar (226463713)
**Unit:** SIT725 — Applied Software Engineering, Deakin University

This repository holds all coding tasks for SIT725. Each task lives in its
own folder, named after its task code (e.g. `1.1P`, `2.2P`).

## Repository structure

```
.
├── 1.1P/               # Task 1.1P — Welcome Package & Intro to Programming
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── scripts.js
│   └── index.html
│
├── 2.2P/               # Task 2.2P — Express Web Servers
│   ├── public/
│   │   └── index.html
│   ├── server.js
│   ├── package.json
│   └── README.md
│
├── .gitignore
└── README.md           # (this file)
```

## Task 1.1P — Welcome Package, Skill Review & Intro to Programming

A static web page built on the Materialize CSS/JS template, demonstrating
basic DOM manipulation.

- `index.html` — loads Materialize from a CDN, plus local `css/styles.css`
  and `js/scripts.js`; has a heading and a "Change Text" button.
- `js/scripts.js` — `changeText()` picks a random string from a 5-item array
  using `getRandomNumberBetween()` and writes it into the heading.
- `css/styles.css` — small custom styling on top of Materialize (heading
  spacing/weight/colour, button margin).

**To run:** open `1.1P/index.html` with the VS Code Live Server extension
("Go Live"), or any static file server.

## Task 2.2P — Express Web Servers

A Node.js/Express server covering static file serving and a REST API.

- `server.js` — serves `public/` statically, plus:
  - `GET /add`, `/subtract`, `/multiply`, `/divide` (query params `a`, `b`)
  - `POST /calculate` (JSON body `{ a, b, op }`)
- `public/index.html` — small calculator UI that calls the API above.

**To run:**
```bash
cd 2.2P
npm install
npm start
```
Then open `http://localhost:3000/`. See `2.2P/README.md` for full endpoint
details 
## Git workflow

```bash
git clone https://github.com/shlokamdar/SIT725_s226463713.git
cd SIT725_s226463713
git add .
git commit -m "<task description>"
git push
```