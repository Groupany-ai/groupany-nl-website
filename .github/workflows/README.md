# CI/CD Pipeline

## Workflows

### `ci.yml` — Lint & Build
Runs on all branches. Validates code quality before merge.

### `deploy.yml` — Deploy to Cloudflare Pages
Runs on `main` pushes and PRs.
- **PR**: Creates a preview deployment with a unique URL
- **main push**: Deploys to production (groupany.nl)

## Setup (one-time)

### 1. Create Cloudflare Pages project

```bash
npx wrangler pages project create groupany-nl
```

Or via Cloudflare dashboard:
- Go to Pages → Create project → Connect to Git
- Select `Groupany-ai/groupany-nl-website`
- Build command: `npm run build`
- Build output: `out`

### 2. Add GitHub Secrets

In the repo → Settings → Secrets → Actions:

| Secret | Value |
|--------|-------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API token with Pages:Edit permission |
| `CLOUDFLARE_ACCOUNT_ID` | `a15ee87f74b3db84ad9b363c06dfff00` |

### 3. Custom domain

In Cloudflare Pages project settings → Custom domains:
- Add `groupany.nl` and `www.groupany.nl`
- DNS records are auto-created

## Environment Variables

Set in Cloudflare Pages dashboard (not in workflow):
- Any Next.js `NEXT_PUBLIC_*` env vars go here

## Build Caching

Node modules are cached via `actions/setup-node@v4` with `cache: npm`.
Cloudflare Pages also caches build artifacts automatically.
