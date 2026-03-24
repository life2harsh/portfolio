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
