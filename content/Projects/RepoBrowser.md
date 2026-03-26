---
title: RepoBrowser
tags: [project, nextjs, typescript, ai, llm, proj-repobrowser]
github: https://github.com/life2harsh/RepoBrowser
homepage: https://repobrowser.vercel.app/
date: 2025-01
status: shipped
---

# RepoBrowser — Intelligent Code Analysis Tool

[[index|Back to Home]]

> Drop in a repo. Get intelligent annotations and summaries powered by LLMs.

<div class="project-preview">
  <div class="project-preview__eyebrow">Production Deployment</div>
  <div class="project-preview__body">
    <div class="project-preview__copy">
      <p>An AI-assisted repository explorer focused on annotations, summaries, and developer workflow speed.</p>
      <div class="project-preview__actions">
        <a href="https://repobrowser.vercel.app/" target="_blank" rel="noopener">Live site</a>
        <a href="https://github.com/life2harsh/RepoBrowser" target="_blank" rel="noopener">Source code</a>
      </div>
    </div>
    <div class="project-preview__screen project-preview__screen--live">
      <div class="project-preview__screen-header">
        <strong>Live preview</strong>
        <span>Embedded from repobrowser.vercel.app</span>
      </div>
      <div class="project-preview__viewport">
        <iframe
          class="project-preview__frame"
          src="https://repobrowser.vercel.app/"
          title="RepoBrowser live preview"
          loading="lazy"
          referrerpolicy="no-referrer"
        ></iframe>
      </div>
      <p class="project-preview__fallback">If the embed is blocked by the site, open <a href="https://repobrowser.vercel.app/" target="_blank" rel="noopener">the live deployment</a>.</p>
    </div>
  </div>
</div>

## Stack
`Next.js` · `TypeScript` · `LLM Integration`

## What it does

- AI-driven repository explorer
- Generates **intelligent code annotations** and **project summaries** using Large Language Models
- Caching layer reduces redundant API calls
- Intelligent file filtering cuts down token usage for large codebases

## Engineering notes

Token cost was the main challenge at scale. The solution was two-pronged: cache repeated requests, and filter out irrelevant files (build artifacts, lockfiles, etc.) before they ever hit the model. This kept latency low and costs reasonable even on large repos.

## Links
- [Live Site](https://repobrowser.vercel.app/)
- [GitHub](https://github.com/life2harsh/RepoBrowser)

---
Related: [[Skills/Frameworks#Next.js|Next.js]] · [[Skills/Languages#TypeScript|TypeScript]]
