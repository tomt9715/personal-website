# Personal Website

Tom Thomas's professional portfolio site. Static HTML/CSS/JS, no build step, no framework.

## Structure

```
index.html                 homepage (intro + highlight cards + nav)
about.html                 full trajectory / background
education.html             education history
clinical-experience.html   clinical rotations
certifications.html        certifications
now.html                   what I'm currently working on
contact.html                contact form
css/style.css               design system + all styles
js/main.js                  mobile nav toggle, active-nav-link highlighting
assets/                     images, favicon, etc.
```

## Running locally

No build step — open `index.html` directly in a browser, or serve the directory:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Updating content

Each page's header/nav and footer are identical, duplicated markup — update nav links in one page and repeat across the others if they ever change.

Repeatable content (clinical rotations, certifications, "Now" entries) uses one HTML block per entry. To add a new one, copy an existing block in the relevant page and fill in the fields — no other files need to change. (Documented in more detail as those pages are built out.)
