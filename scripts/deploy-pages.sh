#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

if [[ -x "$ROOT_DIR/scripts/cf-portfolio.sh" ]]; then
  exec "$ROOT_DIR/scripts/cf-portfolio.sh" deploy portfolio
fi

PROJECT_NAME="portfolio-next"
DIST_DIR="dist"
BRANCH="${1:-main}"

echo "Building..."
bun run build

echo "Deploying to Cloudflare Pages (project: ${PROJECT_NAME}, branch: ${BRANCH})..."
exec bunx wrangler pages deploy "${DIST_DIR}" --project-name "${PROJECT_NAME}" --branch "${BRANCH}"
