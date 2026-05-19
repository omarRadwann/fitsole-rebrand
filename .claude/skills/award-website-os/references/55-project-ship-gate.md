# Project Ship Gate

This explains `make project-ship-check`.

## Purpose

The baseline pack can validate itself, but a real website must prove project-specific work. This gate fails when baseline templates, empty fields, starter copy, or missing truth labels remain.

## It Checks For

- Business input filled.
- Assumptions table updated beyond baseline.
- Research status labeled.
- Three concepts scored.
- Selected concept named.
- Art direction contains project-specific decisions.
- Copy system contains final hero and CTA drafts.
- Asset ledger has rights information.
- Tech stack and 3D route are decided.
- Screenshots are reviewed or blocked.
- QA report contains command statuses.
- Ship decision contains truth labels.

## Expected Behavior

This command is expected to fail on a fresh pack. It should pass only after Claude Code has done a real project.
