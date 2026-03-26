---
title: Vortex
tags: [project, python, docker, mysql, fullstack, proj-vortex]
github: https://github.com/life2harsh/vortex
homepage: https://vortex.harshjha.xyz/
date: 2024-12
status: shipped
---

# Vortex — Scalable Content Platform

[[index|Back to Home]]

> Containerized blogging and chat app load-tested to 10,000 concurrent users.

<div class="project-preview" style="--project-preview-width: 1360px; --project-preview-height: 920px; --project-preview-scale: 0.74;">
  <div class="project-preview__eyebrow">Production Deployment</div>
  <div class="project-preview__body">
    <div class="project-preview__copy">
      <p>A content platform that combines blogging and chat with containerized deployment and serious load targets.</p>
      <div class="project-preview__actions">
        <a href="https://github.com/life2harsh/vortex" target="_blank" rel="noopener">Source code</a>
      </div>
    </div>
    <div class="project-preview__screen project-preview__screen--live">
      <div class="project-preview__screen-header">
        <strong>Live preview</strong>
        <span>Embedded from vortex.harshjha.xyz</span>
      </div>
      <div class="project-preview__viewport">
        <iframe
          class="project-preview__frame"
          src="https://vortex.harshjha.xyz/"
          title="Vortex live preview"
          loading="lazy"
          referrerpolicy="no-referrer"
        ></iframe>
      </div>
      <p class="project-preview__fallback">If the embed is blocked by the site, open <a href="https://vortex.harshjha.xyz/" target="_blank" rel="noopener">the live deployment</a>.</p>
    </div>
  </div>
</div>

## Stack
`Python` · `Docker` · `MySQL`

## What it does

- Full-stack **blogging + chat** application
- Fully containerized via **Docker** for consistent environments across dev and prod
- Load tested with **Locust** — sustains **10,000 concurrent users**
- Optimized database schema designed for complex relational data

## Engineering notes

The 10k concurrent users benchmark wasn't accidental — I built the schema with that ceiling in mind, then validated it with Locust to confirm. Docker containerization meant zero "works on my machine" issues during testing.

## Links
- [Live Site](https://vortex.harshjha.xyz/)
- [GitHub](https://github.com/life2harsh/vortex)

---
Related: [[Skills/Frameworks#Docker|Docker]] · [[Skills/Languages#Python|Python]]
