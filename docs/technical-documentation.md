# Technical Documentation

## Overview

This portfolio uses semantic HTML, CSS, and browser JavaScript. There is no framework, build process, public API, database, or message delivery service.

Assignment 1 supplied the page sections, responsive project cards, saved theme, time-based greeting, basic form, and hover effects. Assignment 2 adds project title search and its empty state, styles the search field, and improves feedback and accessibility.

## Files

| File | Responsibility |
| --- | --- |
| `index.html` | Page structure, labeled controls, project content, and status messages. |
| `css/styles.css` | Theme variables, responsive layouts, search styling, focus indicators, and transitions. |
| `js/script.js` | Greeting, theme persistence, form confirmation, footer year, and project filtering. |
| `assets/images/` | Screenshots of the two projects. |
| `docs/ai-usage-report.md` | AI usage log, evidence details, and student declaration. |

## Project search

1. JavaScript selects the `.project-grid` element and its `h3` headings.
2. An `input` listener runs whenever the search value changes, including when it is cleared.
3. `trim().toLowerCase()` normalizes the query once per event. Each title is also converted to lowercase.
4. `includes()` checks whether the title contains the query.
5. `closest(".project-card")` finds the article containing each title. Setting its `hidden` property shows or hides the complete card.
6. A counter records hidden cards. After the loop, it is compared with `headings.length` to decide whether the no-results message should be visible.

The empty string matches every title, so clearing the input restores every card. The total is derived from the DOM rather than hardcoded. New projects should follow the existing article structure with one `h3` title per `.project-card`.

Search covers titles only. Descriptions and technology tags are intentionally outside its current matching behavior.

## Theme preference and failure feedback

The `.dark` class on `body` switches the CSS custom properties used throughout the page. The button describes the theme that clicking it will activate; `aria-pressed` indicates whether dark mode is currently active.

The `theme` localStorage key contains `dark` or `light`. On page load, JavaScript reads the saved value. Every toggle updates the appearance and attempts to save the new choice.

Storage operations use `try...catch`. If reading or writing fails, a visible status message explains the problem and suggests allowing site storage. Theme switching, search, and the form continue to work for the current visit. Storage is specific to the site's origin, so using another hostname or port creates a separate preference.

## Demonstration form

The name, email, and message fields use `required`; the email field also uses `type="email"`. The browser blocks invalid submissions and supplies validation feedback.

When the browser accepts the fields, the submit listener calls `preventDefault()`, displays a confirmation in an `aria-live="polite"` region, and resets the form. The introductory text and button explain that this is a validation demonstration.

No email is sent, and form values are not stored or submitted. Native validation is basic: it does not prove an address exists or replace server validation for a future real contact service.

## Layout, accessibility, and motion

- CSS Grid provides two project columns on wider screens and one column below 700px.
- The search field uses the existing theme colors and shrinks to fit its container.
- Each form control has a visible label. The search icon is decorative and hidden from assistive technology.
- The search field points to the project list with `aria-controls`; the empty-state message uses `role="status"`.
- Links and buttons have visible keyboard focus. The search wrapper displays a focus outline when its input receives focus.
- Hover and theme transitions are short. The reduced motion media query disables these transitions, the button lift, and smooth scrolling.
- Section scroll margins account for the sticky navigation header.
- Project images have alternative text, intrinsic dimensions, and lazy loading. Existing CSS reserves their display area.

## Other dynamic content

The greeting uses the visitor's local hour: morning before 12, afternoon before 18, and evening afterward. The footer year is generated from the current date. Neither requires a network request.

## Verification

Verification date: 2026-10-24.

AI-run verification completed with 24 browser checks in headless Firefox 158.0 and 14 static checks. The verification scripts, JSON results, and screenshots are preserved in the separate AI evidence package.

| Area | Checks completed | Result |
| --- | --- | --- |
| Search | Initial cards, title matches, uppercase query, surrounding spaces, no matches, clearing, and whitespace-only input. | Passed. |
| Theme | Switching, saved values, pressed state, and restoration of both light and dark themes after refresh. | Passed. |
| Storage failure | Simulated storage access failure; confirmed readable feedback and continued theme switching and search. | Passed. |
| Form | Empty submission, malformed email, and valid input with honest confirmation and reset. | Passed. |
| Keyboard and focus | Tab from the logo to navigation and the search field's visible focus outline. | Passed. |
| Responsive layout | Exact 320px, 390px, 768px, and 1440px viewports; no horizontal page overflow; expected project column count. | Passed. |
| Reduced motion | Preference enabled in a separate Firefox session; smooth scrolling and specified transitions disabled. | Passed. |
| Static checks | JavaScript syntax, patch whitespace, unique IDs, labels, references, local assets, documentation links, exact declaration text, and Git ignore rules for evidence. | Passed. |

The narrow viewports were set through WebDriver BiDi because Firefox's desktop window resizing has a minimum width. Screenshots of the project section were also inspected at desktop and narrow widths.

These results cover Firefox in this environment. Chrome, Edge, Safari, physical devices, and screen-reader announcement behavior have not been verified. A full keyboard audit has not been performed. The student should complete additional browser checks and record their actual results before submission.

## Known limitations

- JavaScript is required for search, theme persistence, and the demonstration confirmation. Without it, project content remains visible.
- Theme persistence depends on browser storage permissions.
- There is no message delivery backend or public API integration; neither is required because localStorage satisfies the data-handling option.
- No live deployment is configured in this repository. Local setup is described in the README.
