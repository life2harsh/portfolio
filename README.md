# Harsh Jha Portfolio Site

This folder contains the Quartz site used to publish the `harsh-vault` Obsidian vault.

## Local workflow

1. Install dependencies:

   ```bash
   npm ci
   ```

2. Sync the vault into Quartz content and preview locally:

   ```bash
   npm run dev:vault
   ```

3. Build a production copy locally:

   ```bash
   npm run build:vault
   ```

The sync step copies Markdown and common assets from the source vault into `content/`, rewrites `Home.md` into the real Quartz homepage at `content/index.md`, and keeps Quartz-specific files out of the published graph.

## Repo and deploy flow

- `npm run sync:vault`
  Updates `content/` from the source vault.
- `npm run build`
  Builds the committed `content/` only. This is what GitHub Actions uses.
- `npm run sync:github`
  Syncs the vault and then runs Quartz's Git helper for commit/push workflows.

The default `baseUrl` currently assumes a GitHub Pages site at `life2harsh.github.io/harsh-vault`. Update `quartz.config.ts` if your repo name or domain changes.

By default, the sync script looks for a sibling folder named `harsh-vault`. If the source vault ever moves, set `VAULT_SOURCE_DIR` before running the sync command.

## First push

The cloned Quartz upstream remote has been renamed to `upstream` on purpose, so this repo will not accidentally push anywhere.

Once you create your GitHub repository, run:

```bash
git remote add origin <your-private-repo-url>
git push -u origin v4
```

After that, `npm run sync:github` will work as your normal publish command.
