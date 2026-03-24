---
title: Vortex
tags: [project, python, docker, mysql, fullstack, proj-vortex]
github: https://github.com/life2harsh/vortex
date: 2024-12
status: shipped
---

# Vortex — Scalable Content Platform

[[index|Back to Home]]

> Containerized blogging and chat app load-tested to 10,000 concurrent users.

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
- [GitHub](https://github.com/life2harsh/vortex)

---
Related: [[Skills/Frameworks#Docker|Docker]] · [[Skills/Languages#Python|Python]]
