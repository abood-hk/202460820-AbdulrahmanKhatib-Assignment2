# Assignment 2 — AI Usage Report

- Student: Abdulrahman Khatib
- Student ID: 202460820
- Report prepared: 2026-10-24

**Review status:** This report is an AI-prepared draft based on the recorded conversation and repository. The student must review and adapt the generated work, verify the evidence, and sign the declaration before submission. A name printed below is not a signature.

## Tools and scope

ChatGPT/Codex was used for assignment planning, syntax explanations, debugging, styling, documentation, and final verification. Session metadata records the model identifiers `gpt-6.1-sol` and `gpt-6-luna`; the evidence manifest records the identifiers available when the transcript is exported.

The portfolio's original sections, theme toggle, greeting, form, and basic transitions were inherited from Assignment 1. The initial search and empty-state logic were implemented by the student with AI explanations and debugging hints. The student then explicitly requested AI-generated search styling and later authorized final local refinements and documentation.

## Usage log

Rows beginning with C identify conversations. Rows beginning with A identify substantial generated artifacts from that conversation; they do not represent separate conversations.

| ID  | Tool (model)                                                       | Date                  | Purpose                                                                                                                                                                                                                                     | Files affected                                                                                       | What you changed and how you verified it                                                                                                                                                                                                                                                                                                                                                                    |
| --- | ------------------------------------------------------------------ | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| C01 | ChatGPT/Codex (`gpt-6.1-sol`, `gpt-6-luna`; see evidence manifest) | 2026-10-22–2026-10-24 | Plan Assignment 2; explain search input, lowercase conversion, selectors, loops, parent lookup, visibility, counters, and collection length; debug the student's implementation; review requirements; provide styling and final assistance. | `index.html`, `js/script.js`, `css/styles.css`, `README.md`, `.gitignore`, both documentation files. | The student implemented title filtering and the no-results message, corrected selector and block-scope mistakes after explanations, replaced the hardcoded project total with `headings.length`, and corrected the form confirmation. The student reported that search worked. Final AI changes and verification are recorded below; student review of those changes remains pending.                       |
| A01 | ChatGPT/Codex (GPT-6.1, as credited in the styling commit)         | 2026-10-24            | Generate a search wrapper, decorative icon, responsive field styling, theme colors, and focus treatment.                                                                                                                                    | `index.html`, `css/styles.css`                                                                       | AI generated and applied the styling after the student's explicit request. A whitespace check passed at that time. The original styling patch is preserved as evidence. No later student modification of that styling has yet been confirmed.                                                                                                                                                               |
| A02 | ChatGPT/Codex (session model details in manifest)                  | 2026-10-24            | Refine existing search, handle unavailable localStorage, clarify the demo form, and improve accessibility and motion preferences.                                                                                                           | `index.html`, `js/script.js`, `css/styles.css`, `.gitignore`                                         | AI normalized the search once per event, moved the empty-state decision after the loop, added storage failure feedback and theme state, clarified the demo form, and added focus, image, and reduced motion improvements. Original student files and AI-produced files are preserved separately. Student adaptation and review remain pending. See technical documentation for actual verification results. |
| A03 | ChatGPT/Codex (session model details in manifest)                  | 2026-10-24            | Draft Assignment 2 README, technical documentation, and AI report.                                                                                                                                                                          | `README.md`, `docs/technical-documentation.md`, `docs/ai-usage-report.md`                            | AI replaced the inherited documentation with Assignment 2 descriptions, setup instructions, implementation explanations, and this usage log. The declaration is deliberately unsigned. Student factual review and edits remain pending.                                                                                                                                                                     |
| A04 | ChatGPT/Codex (session model details in manifest)                  | 2026-10-24            | Prepare verification and evidence packaging outside the repository.                                                                                                                                                                         | External evidence `artifacts/`, `conversations/`, and `verification/`; no application feature added. | AI preserved the pre-assistance files and original styling patch and prepared an exporter for recorded user/assistant messages and generated artifacts. Evidence must be refreshed after the last response so it includes the complete finished conversation.                                                                                                                                               |

## Evidence package

Submit `202460820-AbdulrahmanKhatib-assignment2-ai-evidence.zip` on Blackboard alongside the repository link. Do not commit the ZIP, conversation transcripts, or intermediate artifacts.

The prepared evidence directory contains:

- `conversations/`: the C01 user/assistant transcript, with message text preserved, and structured tool activity where available.
- `artifacts/`: original AI code examples, the search styling patch, the student's files before final assistance, and the AI-generated refinements and documentation before student edits.
- `verification/`: actual check output when available.
- A manifest describing export scope, dates, model identifiers, and any remaining limitations.

The export excludes internal system instructions and private model reasoning; it preserves the recorded user messages and visible assistant replies. Refresh the export after the final reply. Add any other AI conversations used for this assignment as separate entries and evidence; this draft cannot certify conversations outside this session.

## Understanding and adaptations — student review pending

Before signing, explain the event listener, DOM selectors, `includes()`, `closest()`, `hidden`, the hidden-card counter, and `headings.length` in your own words. Review the new `try...catch` blocks and the distinction between validating a demo form and sending a real message.

Record your actual changes to generated code or text here, together with the checks you performed. Do not claim edits, browser checks, or understanding that have not happened. Preserve the original AI versions in the evidence before editing.

AI-run verification on 2026-10-24 completed 24 Firefox browser checks and 14 static checks. These are assistant-run results, not evidence that the student personally performed those checks. Coverage and remaining browser limitations are listed in the technical documentation; scripts and results are included in the evidence.

## Commit attribution

The search styling commit already includes AI attribution. The earlier search, empty-state, and form-feedback work also received AI help through explanations or debugging. The report records that assistance even where the original commit messages did not.

Before publishing, ensure commits containing AI-assisted code include an `Assisted-by:` credit. Existing commit history has not been rewritten by this documentation update.

## Declaration — unsigned, student action required

> I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.

- Name: Abdulrahman Khatib
- Student ID: 202460820
- Date signed: 2026-10-24
- Signature: Abdulrahman Khatib
