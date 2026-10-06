# Family Upholstery Website

A responsive website draft for Family Upholstery in Carrollton, Georgia.

## Uploading to GitHub

Create an empty GitHub repository, then upload everything in this folder. Keep the folder structure unchanged.

## Running locally

This project uses Node.js and pnpm.

```bash
pnpm install
pnpm dev
```

Then open the local address shown in the terminal.

## Before production use

- Replace the draft stock photos with Family Upholstery project photos.
- Confirm business hours, services, history, and contact information.
- Connect the estimate form to an email service or form backend.
- Update the deployment URL in `app/layout.tsx` if the public domain changes.

## Main files

- `app/page.tsx` — page content and interactions
- `app/globals.css` — colors, layout, typography, and responsive styling
- `app/layout.tsx` — page title and social-sharing metadata
- `public/og.png` — social-sharing preview image
