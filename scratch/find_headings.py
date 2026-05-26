import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\6a4d7df6-5304-45ab-9322-eff7dbfbfde4\.system_generated\steps\49\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Let's search for block-head
block_head_matches = re.finditer(r'<div class="[^"]*block-head[^"]*"[^>]*>(.*?)</div>', html, re.DOTALL)
print("Block-heads found:")
for i, m in enumerate(block_head_matches):
    content = m.group(1).strip()
    clean = re.sub(r'\s+', ' ', re.sub('<[^<]+?>', ' ', content)).strip()
    print(f"{i+1}: {clean}")

# Let's also look for section headings in Elementor or standard headings
headings = re.finditer(r'<h[1-6][^>]*>(.*?)</h[1-6]>', html, re.DOTALL)
print("\nAll Headings (H1-H6):")
for i, m in enumerate(headings):
    content = m.group(1).strip()
    clean = re.sub(r'\s+', ' ', re.sub('<[^<]+?>', ' ', content)).strip()
    if clean and len(clean) < 100:
        print(f"H: {clean}")
