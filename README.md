# Bible Quizzy

Quizzes for all 66 books of the Bible, Old and New Testament, plus John chapter by chapter.
Each quiz has three rounds, the hard words explained, people and places, and verses worth underlining.
Scores, underlined verses and journal notes are saved in the browser, with a backup file you can download and restore.

Static site: open `index.html`. Content lives in `js/books-*.js` (one object per book) and `js/john-chapters.js`.

## Language (English / Spanish)

The app's interface — navigation, buttons, round names, toasts, stat labels, and all 66 book/group names — is bilingual. A pill button in the top bar (next to "My Bible" / "Mi Biblia") toggles between them; the choice is remembered (`localStorage`, key `bq:lang`) and otherwise defaults to the browser's language.

- `js/i18n.js` holds the dictionary (`STR.en` / `STR.es`) and the `t(key, ...args)` lookup — every dynamic string in `js/app.js` goes through it.
- `js/catalog.js` carries `nameEs`/`tagEs` per book and `nameEs`/`descEs` per group, swapped in by `applyBookLanguage()`.
- **Quiz content is not translated yet** — book/chapter overviews, questions, cast bios, hard words, and underline verses all stay in English regardless of the selected UI language. That's a separate, much larger effort (461 chapter files + 12 book files). A few sentences that splice a translated label next to untranslated content (e.g. a book's one-line tag followed by its English overview) will read as mixed English/Spanish until that follow-up is done.
