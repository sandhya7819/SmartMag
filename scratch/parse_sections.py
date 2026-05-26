import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\6a4d7df6-5304-45ab-9322-eff7dbfbfde4\.system_generated\steps\49\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Let's search for block heads or widget titles.
# <div class="widget-title block-head ..."> ... </h5></div> or <h5 class="heading">...</h5>
block_heads = re.findall(r'<h5 class="heading">(.*?)</h5>', html)
block_heads_h3 = re.findall(r'<h3 class="heading">(.*?)</h3>', html)
block_heads_h2 = re.findall(r'<h2 class="heading">(.*?)</h2>', html)
widget_titles = re.findall(r'<div class="widget-title[^>]*>(.*?)</div>', html, re.DOTALL)

print("Block Heads (H5):")
print(block_heads)
print("\nBlock Heads (H3):")
print(block_heads_h3)
print("\nBlock Heads (H2):")
print(block_heads_h2)
print("\nWidget Titles:")
for title in widget_titles[:20]:
    clean_title = re.sub('<[^<]+?>', '', title).strip()
    print(f"- {clean_title}")
