---
title: wimg
tags: [project, rust, systems, cli, proj-wimg]
github: https://github.com/life2harsh/wimg
date: 2024-10
status: shipped
---

# wimg — High-Performance Terminal Graphics Engine

[[index|Back to Home]]

> Render images, videos, and GIFs directly in your terminal.

<div class="project-preview">
  <div class="project-preview__eyebrow">Preview Placeholder</div>
  <div class="project-preview__body">
    <div class="project-preview__copy">
      <h3>wimg</h3>
      <p>A terminal-native media renderer focused on performance, portability, and surprisingly smooth playback.</p>
      <div class="project-preview__actions">
        <a href="https://github.com/life2harsh/wimg" target="_blank" rel="noopener">Source code</a>
      </div>
    </div>
    <div class="project-preview__screen project-preview__screen--placeholder">
      <strong>Preview coming soon</strong>
      <span>No hosted demo linked yet</span>
      <p>This slot is reserved for terminal renders, GIF playback frames, or benchmark visuals.</p>
    </div>
  </div>
</div>

## Stack
`Rust` · `FFmpeg` · `Libsixel`

## What it does

- Renders media (images, videos, GIFs) inside the terminal using **Sixel graphics**
- Dynamic FPS detection up to **30 FPS**
- Cross-platform: statically links all dependencies including FFmpeg — runs as a **standalone binary on Windows**

## Why I built it

I wanted a fast, dependency-free way to preview media without leaving the terminal. Most existing tools had heavy runtime requirements or poor performance. wimg bundles everything it needs.

## Links
- [GitHub](https://github.com/life2harsh/wimg)

---
Related: [[Skills/Languages#Rust|Rust]] · [[Skills/Frameworks#FFmpeg|FFmpeg]]
