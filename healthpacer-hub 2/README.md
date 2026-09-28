# HealthPacer Hub Prototype

Clickable front-end prototype of the HealthPacer patient access hub. Static files only, no build step.

## Contents

- `index.html` : entry page with the demo sign-in
- `assets/styles.css` : all styles
- `assets/app.js` : the prototype (screens, sample data, interactions)
- `assets/gate.js` : demo password gate
- `assets/healthpacer-logo-white.png`, `assets/favicon.png` : brand assets
- `.nojekyll` : tells GitHub Pages to serve the files as-is

## Host on GitHub Pages

1. Create a new repository on GitHub (private or public; Pages on private repos needs a paid GitHub plan).
2. Upload everything in this folder to the root of the repository, including the hidden `.nojekyll` file. The easiest way is **Add file > Upload files** and drag the folder contents in.
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**, pick the `main` branch and the `/ (root)` folder, then **Save**.
5. After a minute or two the site is live at `https://<your-account>.github.io/<repository-name>/`.

## Demo password

The password is `PlanA`. It is checked in the browser and remembered until the tab is closed.

This gate keeps casual visitors out. It is not real security: the files are public on GitHub Pages and anyone who reads the source can get past it. Do not put real patient data in this prototype.

## Run locally

Open `index.html` in a browser, or serve the folder with any static server, for example `python3 -m http.server` and visit `http://localhost:8000`.
