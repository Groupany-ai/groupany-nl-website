# CI/CD Pipeline

## Workflows

### `ci.yml` — Lint & Build
Runs on all branches. Validates code quality before merge.

### `deploy.yml` — Deploy to Cloudflare Pages
- **PR**: Creates a preview deployment with a unique URL
- **main push**: Deploys to production (groupany.nl)

## One-time Setup Required

### 1. Create Cloudflare Pages project
```bash
npx wrangler pages project create groupany-nl
```
Build command: `npm run build` | Build output: `out`

### 2. Add GitHub Secrets
| Secret | Value |
|--------|-------|
| `CLOUDFLARE_API_TOKEN` | Token with Pages:Edit permission |
| `CLOUDFLARE_ACCOUNT_ID` | `a15ee87f74b3db84ad9b363c06dfff00` |

### 3. Custom domain
In Cloudflare Pages → Custom domains → Add `groupany.nl`
