# Wine Cellar website (v2)

Static one-page site in 8 languages: English, Polish, German, French, Spanish, Portuguese, Italian, Czech.
All files are in this one folder (no subfolders), so you can select everything and upload it to GitHub in one go.

- `index.html` – page structure (English text as the default)
- `i18n.js` – all translations; edit texts here
- `app.js` – language menu, mobile menu, film chapters, gallery, lightbox
- `style.css` – look and layout
- `s-*.jpg` – real app screenshots (`-pl` = Polish versions)

Language: picked from the visitor's browser, or forced with a link such as `index.html?lang=de`.
To add screenshots in another language, name them like `s-cellar-de.jpg` and list them in `WC_SHOTS` at the bottom of `i18n.js`.
