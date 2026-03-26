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

<div class="project-preview">
  <div class="project-preview__eyebrow">Production Deployment</div>
  <div class="project-preview__body">
    <div class="project-preview__copy">
      <h3>Cocoon</h3>
      <p>A calm journaling interface built around privacy, local-first writing, and a soft app-like flow.</p>
      <div class="project-preview__actions">
        <a href="https://cocoon.harshjha.xyz" target="_blank" rel="noopener">Visit live site</a>
        <a href="https://github.com/life2harsh/cocoon" target="_blank" rel="noopener">Source code</a>
      </div>
    </div>
    <div class="project-preview__screen project-preview__screen--live">
      <strong>Live preview</strong>
      <span>Deployed on `cocoon.harshjha.xyz`</span>
      <p>Production-ready journaling flows, auth, and reminder support.</p>
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
Related: [[Skills/Languages#TypeScript|TypeScript]] · [[Skills/Languages#Python|Python]] · [[Skills/Frameworks#React.js / Next.js|React]] · [[Skills/Frameworks#FastAPI / Express.js|FastAPI]] · [[Skills/Frameworks#Tailwind CSS|Tailwind CSS]]
