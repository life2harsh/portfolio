---
title: Cocoon
tags: [project, typescript, python, react, fastapi, pwa, proj-cocoon]
github: https://github.com/life2harsh/cocoon
homepage: https://cocoon.harshjha.xyz
date: 2026-03
status: active
---

# Cocoon — Private Journaling App

[[index|Back to Home]]

> A privacy-conscious journaling app with a React frontend, FastAPI backend, and PWA support.

<div class="project-preview" style="--project-preview-width: 1360px; --project-preview-height: 920px; --project-preview-scale: 0.74;">
  <div class="project-preview__eyebrow">Production Deployment</div>
  <div class="project-preview__body">
    <div class="project-preview__copy">
      <p>A calm journaling interface built around privacy, local-first writing, and a soft app-like flow.</p>
      <div class="project-preview__actions">
        <a href="https://github.com/life2harsh/cocoon" target="_blank" rel="noopener">Source code</a>
      </div>
    </div>
    <div class="project-preview__screen project-preview__screen--live">
      <div class="project-preview__screen-header">
        <strong>Live preview</strong>
        <span>Embedded from cocoon.harshjha.xyz</span>
      </div>
      <div class="project-preview__viewport">
        <iframe
          class="project-preview__frame"
          src="https://cocoon.harshjha.xyz"
          title="Cocoon live preview"
          loading="lazy"
          referrerpolicy="no-referrer"
        ></iframe>
      </div>
      <p class="project-preview__fallback">If the embed is blocked by the site, open <a href="https://cocoon.harshjha.xyz" target="_blank" rel="noopener">the live deployment</a>.</p>
    </div>
  </div>
</div>

## Stack
`React` · `TypeScript` · `FastAPI` · `SQLite` · `Tailwind CSS`

## What it does

- Private journaling experience designed around local-first personal data
- React + Vite frontend with responsive app flows
- FastAPI backend with SQLite persistence
- Google OAuth handled through the Python backend
- Progressive Web App support for reminders and notifications

## Engineering notes

One of the most interesting parts of Cocoon is how the repository is structured for public source control without exposing private application logic or personal data. The tracked backend can fall back to a public-safe implementation, while local private routes stay outside git.

## Links
- [Live Site](https://cocoon.harshjha.xyz)
- [GitHub](https://github.com/life2harsh/cocoon)

---
Related: [[Skills/Languages#TypeScript|TypeScript]] · [[Skills/Languages#Python|Python]] · [[Skills/Frameworks#React.js / Next.js|React]] · [[Skills/utFrameworks#FastAPI / Express.js|FastAPI]] · [[Skills/Frameworks#Tailwind CSS|Tailwind CSS]]
