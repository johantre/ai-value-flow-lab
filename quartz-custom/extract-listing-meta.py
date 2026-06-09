#!/usr/bin/env python3
import os, re, json, sys

content_dir = sys.argv[1] if len(sys.argv) > 1 else 'content'
meta = {}

for root, dirs, files in os.walk(content_dir):
    dirs[:] = [d for d in dirs if not d.startswith('.') and d != 'quartz-custom']
    for fname in files:
        if not fname.endswith('.md'):
            continue
        path = os.path.join(root, fname)
        rel = os.path.relpath(path, content_dir)
        slug = rel.replace(os.sep, '/')[:-3]  # strip .md
        try:
            with open(path, encoding='utf-8') as fh:
                txt = fh.read()
        except Exception:
            continue
        m = re.match(r'^---\s*\n(.*?)\n---', txt, re.DOTALL)
        if not m:
            continue
        author = year = ''
        for line in m.group(1).splitlines():
            if re.match(r'^author\s*:', line):
                author = line.split(':', 1)[1].strip().strip('"\'')
            elif re.match(r'^year\s*:', line):
                year = line.split(':', 1)[1].strip().strip('"\'')
        if author or year:
            meta[slug] = {'author': author, 'year': year}

print(json.dumps(meta, ensure_ascii=False))
