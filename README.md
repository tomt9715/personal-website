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

Each page's header/nav and footer are identical, duplicated markup. Update nav links in one page and repeat across the others if they ever change.

Repeatable content uses one HTML block (`<article class="entry">`) per item. To add a new one, copy an existing block in the relevant page, edit the fields, and paste it in. No other file needs to change.

**Clinical Experience** (`clinical-experience.html`): each rotation is a `.timeline-item` wrapping an `.entry`, listed most-recent-first. Copy a block, update the facility name (`h3`), the `.entry-meta` (semester/timing), and the `.entry-tags` badges (specialty focus).

**Certifications** (`certifications.html`): each cert is an `.entry` with a `.status-pill` instead of a date, one of `is-progress` (in progress), `is-planned` (planned/upcoming), or `is-goal` (long-term goal).

**Now** (`now.html`): each project is an `.entry` with a type badge (e.g. "Platform", "Study Tool") and a `card-link` out to the project. This is the section meant to change most often. To add a new project, copy a block, swap in the title, badge, one-line description, and link. Add `target="_blank" rel="noopener noreferrer"` on the link since these point off-site.

**Education** (`education.html`): same `.entry` pattern, ordered most-recent-first, no badges needed.

## Contact form

`contact.html` posts to a Formspree endpoint (free plan, 50 submissions/month) and is intercepted by `js/main.js` to show an inline success/error message instead of redirecting to Formspree's hosted page. To point it at a different Formspree form, update the `action` attribute on `#contact-form`.
