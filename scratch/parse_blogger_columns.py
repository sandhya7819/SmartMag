import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\ce4a9638-c04f-43b7-8e28-5af26863bf43\.system_generated\steps\400\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Let's search for elementor sections.
# <div class="elementor-section ..."> or similar.
# Let's look for sections and print their columns structure.
sections = re.findall(r'<section\s+class="[^"]*elementor-section[^"]*"[^>]*>(.*?)</section>', html, re.DOTALL)
print(f"Found {len(sections)} Elementor sections:")

for idx, sec_body in enumerate(sections):
    # Find all columns inside this section
    columns = re.findall(r'<div\s+class="[^"]*elementor-column\s+[^"]*elementor-col-(\d+)[^"]*"[^>]*>(.*?)</div>\s*</div>\s*(?=<div|<!--)', sec_body, re.DOTALL)
    print(f"\nSection {idx+1}:")
    print(f"  Columns count: {len(columns)}")
    for col_idx, (col_width, col_body) in enumerate(columns):
        # Find all block titles or widget names in this column
        block_heads = re.findall(r'<div[^>]*class="[^"]*(?:block-head|widget-title|block-title)[^"]*"[^>]*>(.*?)</div>', col_body, re.DOTALL)
        clean_heads = [re.sub(r'<[^>]+>', '', h).strip() for h in block_heads]
        clean_heads = [re.sub(r'\s+', ' ', h) for h in clean_heads]
        print(f"    Col {col_idx+1}: Width {col_width}% (Blocks: {clean_heads})")
        # Also print post titles inside this column (first 2)
        posts = re.findall(r'<h[234]\s+class="[^"]*post-title[^"]*"[^>]*>.*?<a[^>]*>(.*?)</a>', col_body, re.DOTALL)
        posts_clean = [re.sub(r'<[^>]+>', '', p).strip() for p in posts[:2]]
        print(f"      Posts: {posts_clean}")
