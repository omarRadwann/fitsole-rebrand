#!/usr/bin/env python3
import json, sys, os, datetime
try:
    data = json.load(sys.stdin)
except Exception:
    sys.exit(0)
file_path = ((data.get('tool_input') or {}).get('file_path') or '')
if not file_path:
    sys.exit(0)
root = os.environ.get('CLAUDE_PROJECT_DIR') or os.getcwd()
log_dir = os.path.join(root, '.claude')
os.makedirs(log_dir, exist_ok=True)
with open(os.path.join(log_dir, 'session-audit.log'), 'a', encoding='utf-8') as f:
    f.write(f"{datetime.datetime.utcnow().isoformat()}Z EDIT {file_path}\n")
sys.exit(0)
