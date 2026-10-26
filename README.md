# Freshmen Beauty Salon — client presentation demo

A complete one-page HTML/CSS/JavaScript website. No framework, npm dependencies, API keys or build step. All three licensed photos are included in `dist/assets/` and optimized locally. System fonts work without an external font request.

## Open the website
Open `dist/index.html` in a browser, or serve `dist/` with a local web server. Map loading and WhatsApp require internet access.

## Cloudflare Pages
Deploy the **dist folder**, which contains index.html at its root.
- Framework preset: None
- Build command: `exit 0`
- Build output directory: `dist`
- Root directory: repository root (leave blank)
For Direct Upload, upload the contents of dist or select the dist folder. Do not upload a parent folder with index.html nested another level below it.
Official guidance: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/

This deliverable is ready to deploy; it has not been deployed to your Cloudflare account.

## Files
- dist/index.html — page structure, SEO metadata, contact details, map and dialogs
- dist/styles.css — responsive design; 760px and 1000px breakpoints, small-screen handling, reduced-motion preference
- dist/script.js — mobile menu, service selection, photo lightbox, date/time validation, enquiry preview and WhatsApp link
- dist/assets/ — three licensed stock photographs and original concept favicon
- RESEARCH.md — verified facts, uncertainties and source references
- PHOTO_CREDITS.md — exact image sources and licensing

## Before official launch
1. Ask the owner to approve the service menu, branding and copy; these are explicitly illustrative.
2. Confirm WhatsApp registration on +91 97101 03101. The number itself is from the exact Google Maps listing, but WhatsApp use is unverified.
3. Reconfirm opening hours and address, especially holiday hours.
4. Replace stock photos with owner-authorized photographs if desired. Current photos are legally reusable under Pexels' licence and explicitly labelled as stock.
5. Remove the demo banner, demo notes and noindex metadata/header only when the owner approves an official launch. Revise noindex in index.html, _headers and robots.txt together.

## Appointment behaviour
The form validates name, service, date and time (07:30–22:00; Chennai time). It rejects dates and same-day times in the past. A modal shows the request before the visitor chooses to open WhatsApp. Opening WhatsApp does not confirm or automatically send a booking. The phone link is a fallback. No server, database, email delivery or analytics is configured. Inputs stay in browser memory until the visitor opens WhatsApp; no local storage is used.

## Accessibility and performance
Semantic landmarks, labels, skip link, visible keyboard focus, native modal focus trapping, Escape-to-close, reduced-motion support and lazy loading. Photos are local optimized JPEGs. Google Maps is an external embed with an exact-listing link fallback. No fabricated ratings, reviews, prices or staff credentials.
