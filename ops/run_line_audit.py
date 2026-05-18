#!/usr/bin/env python3
from __future__ import annotations

import csv
import hashlib
import json
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path.cwd()
TEXT_EXTS = {".md", ".txt", ".json", ".toml", ".yaml", ".yml", ".sh", ".ps1", ".py", ".csv", ".rules"}
IGNORE_DIRS = {".git", "node_modules", ".next", "dist", "build"}
GENERATED_AUDIT_PREFIXES = ("AUDIT_", "VALIDATION_V7_")

rows = []
file_summaries = []
issues = []

for path in sorted(ROOT.rglob("*")):
    if not path.is_file():
        continue
    if any(part in IGNORE_DIRS for part in path.parts):
        continue
    if path.name.startswith(GENERATED_AUDIT_PREFIXES):
        continue
    rel = path.relative_to(ROOT).as_posix()
    data = path.read_bytes()
    file_hash = hashlib.sha256(data).hexdigest()
    if path.suffix.lower() not in TEXT_EXTS:
        file_summaries.append({"file": rel, "type": "binary/other", "lines": 0, "sha256": file_hash, "issues": ""})
        continue
    try:
        text = data.decode("utf-8")
    except UnicodeDecodeError:
        file_summaries.append({"file": rel, "type": "non-utf8", "lines": 0, "sha256": file_hash, "issues": "non-utf8"})
        issues.append((rel, 0, "non-utf8", "could not decode as utf-8"))
        continue
    lines = text.splitlines()
    file_issue_flags = []
    if not text.endswith("\n"):
        file_issue_flags.append("no-final-newline")
        issues.append((rel, 0, "no-final-newline", ""))
    for i, line in enumerate(lines, 1):
        flags = []
        if line.rstrip() != line:
            flags.append("trailing-whitespace")
            issues.append((rel, i, "trailing-whitespace", ""))
        if ("/" + "mnt" + "/" + "data") in line:
            flags.append("local-sandbox-path")
            issues.append((rel, i, "local-sandbox-path", line[:160]))
        if "TODO" in line and "unresolved task markers" not in line:
            flags.append("todo-marker")
            issues.append((rel, i, "todo-marker", line[:160]))
        if len(line) > 360:
            flags.append("very-long-line")
            issues.append((rel, i, "very-long-line", str(len(line))))
        rows.append({
            "file": rel,
            "line": i,
            "sha256_16": hashlib.sha256(line.encode("utf-8")).hexdigest()[:16],
            "chars": len(line),
            "flags": ";".join(flags),
            "preview": line[:220].replace("\t", "\\t"),
        })
    file_summaries.append({
        "file": rel,
        "type": "text",
        "lines": len(lines),
        "sha256": file_hash,
        "issues": ";".join(sorted({issue[2] for issue in issues if issue[0] == rel})),
    })

Path("AUDIT_LINE_BY_LINE_MAP.csv").write_text("", encoding="utf-8")
with Path("AUDIT_LINE_BY_LINE_MAP.csv").open("w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=["file", "line", "sha256_16", "chars", "flags", "preview"])
    writer.writeheader()
    writer.writerows(rows)

with Path("AUDIT_FILE_SUMMARY.csv").open("w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=["file", "type", "lines", "sha256", "issues"])
    writer.writeheader()
    writer.writerows(file_summaries)

counter = Counter(issue[2] for issue in issues)
report = [
    "# Line-by-Line Audit Report",
    "",
    f"Generated: {datetime.now(timezone.utc).isoformat()}",
    f"Files scanned: {len(file_summaries)}",
    f"Text lines mapped: {len(rows)}",
    f"Issues found: {len(issues)}",
    "",
    "## Issue Counts",
    "",
]
if counter:
    for key, value in counter.most_common():
        report.append(f"- {key}: {value}")
else:
    report.append("- none")
report += ["", "## Files", ""]
for item in file_summaries:
    report.append(f"- `{item['file']}` — {item['type']}, {item['lines']} lines, sha256 `{item['sha256'][:16]}`" + (f", issues: {item['issues']}" if item['issues'] else ""))

if issues:
    report += ["", "## Issue Details", ""]
    for rel, line, kind, detail in issues[:1000]:
        report.append(f"- `{rel}`:{line} — {kind} {detail}")

Path("AUDIT_LINE_BY_LINE_REPORT.md").write_text("\n".join(report) + "\n", encoding="utf-8")
print(json.dumps({"files": len(file_summaries), "lines": len(rows), "issues": len(issues), "issue_counts": dict(counter)}, indent=2))
