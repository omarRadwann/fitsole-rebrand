#!/usr/bin/env python3
import json, sys, os, re

try:
    data = json.load(sys.stdin)
except Exception:
    sys.exit(0)

file_path = ((data.get('tool_input') or {}).get('file_path') or '').replace('\\', '/')
if not file_path:
    sys.exit(0)

protected = [
    r'(^|/)\.git(/|$)',
    r'(^|/)node_modules(/|$)',
    r'(^|/)\.env(\.|$)',
    r'(^|/)\.env$',
    r'(^|/)\.env\.local$',
    r'(^|/).*\.pem$',
    r'(^|/).*\.key$',
    r'(^|/)id_rsa$',
    r'(^|/)id_ed25519$',
]

for pat in protected:
    if re.search(pat, file_path):
        print(f'Blocked by Moon Level Claude OS: protected file path {file_path}', file=sys.stderr)
        sys.exit(2)

sys.exit(0)
