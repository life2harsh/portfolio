---
title: Git Orientation
tags: [project, javascript, webgl, github-actions, oss, proj-gitorientation]
homepage: https://osdc.github.io/git-orientation/questions.html
date: 2024-03
status: shipped
---

# Git Orientation — WebGL Git Workshop Experience

[[index|Back to Home]]

> An interactive git-learning experience for Open Source Developers Community, designed as a CRT terminal in WebGL.

<div class="project-preview">
  <div class="project-preview__eyebrow">Production Deployment</div>
  <div class="project-preview__body">
    <div class="project-preview__copy">
      <h3>Git Orientation</h3>
      <p>A stylized browser-based onboarding flow that teaches git concepts through a moody CRT interface and puzzle-like interaction design.</p>
      <div class="project-preview__actions">
        <a href="https://osdc.github.io/git-orientation/questions.html" target="_blank" rel="noopener">Visit live site</a>
      </div>
    </div>
    <div class="project-preview__screen project-preview__screen--live">
      <strong>Live preview</strong>
      <span>Deployed on `osdc.github.io`</span>
      <p>Interactive WebGL CRT UI, question flow logic, and production workshop delivery.</p>
    </div>
  </div>
</div>

## Stack
`JavaScript` · `WebGL` · `REGL` · `GitHub Actions`

## What it does

- Turns a git orientation flow into an interactive **CRT terminal experience** rendered in WebGL
- Uses shader-driven visuals and terminal-style interaction to make a workshop feel more like a game than a form
- Ships as a browser-based experience for the Open Source Developers Community
- Supports workshop logic tied to **CTF-style judging** and leaderboard updates

## Engineering notes

The interesting part here was not just building a flashy interface. The UI was deliberately designed to feel like a haunted CRT terminal, while the delivery pipeline handled practical workshop concerns through GitHub Actions automation for evaluation and leaderboard updates.

## Links
- [Live Site](https://osdc.github.io/git-orientation/questions.html)

---
Related: [[Skills/Languages#JavaScript|JavaScript]] · [[Skills/Frameworks#GitHub Actions|GitHub Actions]]
