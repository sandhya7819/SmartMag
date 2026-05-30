import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\ce4a9638-c04f-43b7-8e28-5af26863bf43\.system_generated\steps\400\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

matches = re.findall(r'<div\s+class="([^"]*elementor-column[^"]*)"', html)
print(f"Found {len(matches)} columns:")
for m in matches[:15]:
    print(f"  - {m}")
