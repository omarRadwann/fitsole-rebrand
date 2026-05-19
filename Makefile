SHELL := /bin/bash
PYTHON ?= python3
PROJECT ?= awwwards-site

.PHONY: help validate-everything evidence scaffold strict-check project-ship-check final-check clean-evidence ship

help:
	@echo ""
	@echo "Moon-Level Claude Awwwards Agency OS — make targets"
	@echo ""
	@echo "  make validate-everything   Validate the pack itself (run before any project work)."
	@echo "  make evidence              Scaffold per-project docs/ templates."
	@echo "  make scaffold NAME=slug    Create a new site project from starter-next-awwwards/."
	@echo "  make strict-check          Stricter pack check (used during iteration)."
	@echo "  make project-ship-check    Project ship gate (must pass to call site done)."
	@echo "  make final-check           Convenience wrapper: strict-check + project-ship-check."
	@echo "  make ship                  Alias for final-check."
	@echo "  make clean-evidence        Delete docs/ (will require make evidence to rebuild)."
	@echo ""

validate-everything:
	@$(PYTHON) ops/validate_pack.py

strict-check:
	@$(PYTHON) ops/validate_pack.py --strict

evidence:
	@$(PYTHON) ops/scaffold_evidence.py

scaffold:
	@if [ -z "$(NAME)" ]; then \
		echo "Usage: make scaffold NAME=<project-slug>"; \
		exit 2; \
	fi
	@$(PYTHON) ops/create_project.py --name "$(NAME)"

project-ship-check:
	@$(PYTHON) ops/project_ship_check.py

final-check: strict-check project-ship-check
	@echo ""
	@echo "Final check complete. Read docs/ship-decision.md for truth labels."

ship: final-check

clean-evidence:
	@if [ -d docs ]; then \
		echo "Removing project docs (preserving docs/_templates/) ..."; \
		find docs -maxdepth 1 -type f -delete; \
	fi
