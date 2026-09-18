# Nurshing Azz

React + Tailwind/Vite website with all content maintained inside this project.

## All 19 Separate React Pages

Each page has its own React component with JSX page content:

- `src/pages/Architecture.jsx`
- `src/pages/Arts.jsx`
- `src/pages/Commerce.jsx`
- `src/pages/Computer.jsx`
- `src/pages/Dental.jsx`
- `src/pages/Design.jsx`
- `src/pages/Education.jsx`
- `src/pages/Engineering.jsx`
- `src/pages/Home.jsx`
- `src/pages/Hospitality.jsx`
- `src/pages/Law.jsx`
- `src/pages/Logo.jsx`
- `src/pages/Management.jsx`
- `src/pages/Medical.jsx`
- `src/pages/Paramedical.jsx`
- `src/pages/Pharmacy.jsx`
- `src/pages/Science.jsx`
- `src/pages/Veterinary.jsx`
- `src/pages/Vocational.jsx`

## Main React Files

- `src/App.jsx` selects the page by URL.
- `src/PageRenderer.jsx` applies page metadata and shared page behaviors such as filters, search, sorting, tabs, navigation, and scroll handling.
- `src/pages/index.jsx` imports all 19 pages and maps routes.
- `src/styles.css` contains the shared Tailwind-based styling and responsive fixes.

There is no dependency on any outside content folder for the current React app.

## Run

```bash
npm install --cache .npm-cache
npm run dev
```

Open routes such as `/logo`, `/medical`, `/commerce`, `/engineering`, `/home`, or old-style URLs like `/Medical.html`.

## Check

Verify that all 19 page files are React JSX pages and that the app builds:

```bash
npm run check
```

`npm run generate:pages` is kept as a compatibility alias for the page-content check.

## Navigation Layout

The React app has one shared GetMyUni-style white navigation bar on every page.

Visible nav pages:

- Home
- Medical
- Engineering
- Commerce
- Science
- Management
- Computer
- Pharmacy

The other 11 pages are inside the More dropdown. The Nurshing Azz brand opens the Home page.
