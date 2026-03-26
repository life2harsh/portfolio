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

<div class="project-preview">
  <div class="project-preview__eyebrow">Production Deployment</div>
  <div class="project-preview__body">
    <div class="project-preview__copy">
      <h3>Vortex</h3>
      <p>A content platform that combines blogging and chat with containerized deployment and serious load targets.</p>
      <div class="project-preview__actions">
        <a href="https://vortex.harshjha.xyz/" target="_blank" rel="noopener">Visit live site</a>
        <a href="https://github.com/life2harsh/vortex" target="_blank" rel="noopener">Source code</a>
      </div>
    </div>
    <div class="project-preview__screen project-preview__screen--live">
      <strong>Live preview</strong>
      <span>Deployed on `vortex.harshjha.xyz`</span>
      <p>Blogging, chat, and production-like deployment wrapped into one app surface.</p>
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
