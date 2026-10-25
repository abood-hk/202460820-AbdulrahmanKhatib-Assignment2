# Abdulrahman Khatib — Portfolio

Assignment 2: Interactive Features · SWE363 · Student ID: 202460820

## Project description

A responsive personal portfolio built with HTML, CSS, and JavaScript. This assignment continues the Assignment 1 portfolio by adding live project search, an empty state, and a styled search field. It also improves theme feedback, keyboard focus, and the wording of the demonstration contact form.

## Features

- About, Projects, and Contact sections.
- Live search by project title, ignoring capitalization and surrounding spaces.
- A helpful message when no titles match; clearing the search restores all cards.
- Light and dark themes with a preference saved in `localStorage`.
- Feedback when the browser cannot load or save a theme preference.
- A demonstration form with required fields, email validation, and confirmation.
- A greeting based on the visitor's local time and an automatically updated footer year.
- Responsive layouts, hover transitions, visible keyboard focus, and reduced motion support.

**The contact form does not send email or store messages.** It demonstrates browser validation and a JavaScript confirmation. Search checks project titles, so a technology such as React will only match if it appears in a title.

## Run locally

You need a modern browser. No npm packages, build step, API keys, or backend are required.

1. Download this repository as a ZIP and extract it, or clone it from GitHub.
2. Open a terminal in the project folder.
3. If Python 3 is installed, start a local server:

   ```sh
   python3 -m http.server 8000 --bind 127.0.0.1
   ```

4. Open <http://127.0.0.1:8000> in your browser.
5. Stop the server with `Ctrl+C` when finished.

VS Code Live Server is another option. Opening `index.html` directly also displays the site, but theme storage behavior for local files can vary between browsers; use the local server for testing.

## Usage

- Type `Book` or `Note` in Search projects to filter the cards.
- Enter an unmatched title to see the empty state, then clear the search to restore both cards.
- Switch themes and reload to check that your preference is remembered when storage is available.
- Try submitting the form with empty fields or an invalid email. Valid input displays a confirmation that no message was sent.
- Use Tab to move between interactive controls.

## Project structure

```text
.
├── index.html
├── README.md
├── .gitignore
├── assets/
│   └── images/
│       ├── Bookly.png
│       └── NotesAPI.png
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── docs/
    ├── ai-usage-report.md
    └── technical-documentation.md
```

## AI assistance

ChatGPT/Codex supported planning, JavaScript explanations, debugging, styling, documentation, and final verification. The student initially implemented the search and empty state with guidance; AI later generated styling and final refinements at the student's request.

See the [AI usage report](docs/ai-usage-report.md) for the usage log, review status, and declaration. The evidence ZIP is submitted separately on Blackboard and is excluded from this repository.

## Technical details

See [technical documentation](docs/technical-documentation.md) for implementation details, verification results, and known limitations.
