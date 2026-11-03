---
title: PortCo 1
---

Welcome to the **PortCo 1** section of the portal.

This section is owned by PortCo 1. Its content lives in this repo, and every
push to `main` publishes it to its own section of the portal without touching any
other section.

## Adding pages

1. Add a Markdown file under `pages/`, for example `pages/agents/claims.md`.
2. Add its route (`/agents/claims`) to `navigation` in `zudoku.config.tsx`.
3. Put images in `public/images/` and link them as `/images/<file>`, or keep
   them next to the page and link them relatively.

Run `npm run dev` to preview locally.
