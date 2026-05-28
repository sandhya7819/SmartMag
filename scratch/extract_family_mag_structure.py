import re

file_path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\44bab6e2-2a78-43ca-b476-f07ba604a0cc\.system_generated\steps\242\content.md"

with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

# Let's find all instances of block-head and headings
# Also let's find all headings like <h1, <h2, <h3, <h4, <h5, <h6
headings = []
for m in re.finditer(r"<(h[1-6])([^>]*)>(.*?)</\1>", html, re.IGNORECASE | re.DOTALL):
    tag = m.group(1)
    attrs = m.group(2)
    text = re.sub(r"<[^>]*>", "", m.group(3)).strip()
    headings.append((tag, attrs, text, m.start()))

print(f"Found {len(headings)} headings:")
for h in headings[:100]:
    # Print headings that look like titles
    print(f"  {h[0].upper()} (attrs: {h[1][:40]}): {h[2][:80]}")
