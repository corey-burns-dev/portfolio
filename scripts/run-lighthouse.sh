#!/usr/bin/env bash
set -euo pipefail

PORT=${PORT:-3000}
URL=${URL:-"http://localhost:${PORT}"}
REPORT_DIR=${REPORT_DIR:-"."}

bun run build >/dev/null

bun run preview -- --port "$PORT" >/tmp/astro-preview.log 2>&1 &
PREVIEW_PID=$!

cleanup() {
  if kill -0 "$PREVIEW_PID" >/dev/null 2>&1; then
    kill "$PREVIEW_PID" >/dev/null 2>&1 || true
  fi
}
trap cleanup EXIT

for i in {1..20}; do
  if curl -s -I "$URL" >/dev/null 2>&1; then
    break
  fi
  sleep 0.5
done

if ! curl -s -I "$URL" >/dev/null 2>&1; then
  echo "Preview server not responding at $URL"
  exit 1
fi

TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
REPORT_PATH="$REPORT_DIR/lighthouse_${TIMESTAMP}.report.html"

npx lighthouse "$URL" \
  --output=html \
  --output-path="$REPORT_PATH" \
  --chrome-flags="--no-sandbox --disable-dev-shm-usage --disable-gpu"

echo "Lighthouse report: $REPORT_PATH"
