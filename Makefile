.PHONY: install-os validate-os evidence preflight final-check integrity verify-integrity

install-os:
	bash ops/install.sh

validate-os:
	python ops/validate_pack.py

evidence:
	bash .agents/skills/award-website-os/scripts/create-evidence-files.sh

preflight:
	bash .agents/skills/award-website-os/scripts/zero-gap-preflight.sh

final-check:
	bash .agents/skills/award-website-os/scripts/final-smart-check.sh

integrity:
	python ops/generate_integrity_manifest.py

verify-integrity:
	python ops/verify_integrity_manifest.py
