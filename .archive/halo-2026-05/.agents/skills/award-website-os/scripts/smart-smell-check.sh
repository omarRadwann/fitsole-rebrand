#!/usr/bin/env bash
set -e

echo "Running smart content smell check..."

WORDS="seamless|innovative|next-gen|next generation|cutting-edge|unlock|streamline|robust|empower|tailored solutions|world-class|transform your business"

if command -v rg >/dev/null 2>&1; then
  rg -n -i "$WORDS" app components pages src content public 2>/dev/null || true
else
  grep -R -n -i -E "$WORDS" app components pages src content public 2>/dev/null || true
fi

echo "If matches are real marketing copy, rewrite or justify them."
