import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\ce4a9638-c04f-43b7-8e28-5af26863bf43\.system_generated\steps\400\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Let's look for elementor-row or ts-row or b-row or class="row"
# We can search for <div class="elementor-container ..."> or <div class="elementor-row ...">
containers = re.findall(r'<div\s+class="[^"]*elementor-container\s+[^"]*"[^>]*>(.*?)(?=<!-- \.elementor-container -->|</div>\s*</div>\s*</section>)', html, re.DOTALL)
print(f"Found {len(containers)} Elementor containers:")

for idx, con in enumerate(containers):
    # Find all columns inside this container
    cols = re.findall(r'<div\s+class="[^"]*elementor-column\s+[^"]*elementor-col-(\d+)[^"]*"[^>]*>(.*?)(?=<!-- \.elementor-column -->|</div>\s*</div>\s*(?:<div class="elementor-column|</section>))', con, re.DOTALL)
    print(f"\nContainer {idx+1}:")
    print(f"  Columns count: {len(cols)}")
    for col_idx, (col_width, col_body) in enumerate(cols):
        # Find all block-wrap elements inside this column
        blocks = re.findall(r'<section\s+class="[^"]*block-wrap[^"]*"[^>]*>.*?<div[^>]*class="[^"]*(?:block-head|widget-title)[^"]*"[^>]*>(.*?)</div>', col_body, re.DOTALL)
        clean_blocks = [re.sub(r'<[^>]+>', '', b).strip() for b in blocks]
        clean_blocks = [re.sub(r'\s+', ' ', b) for b in clean_blocks]
        
        # Let's print out the structure
        print(f"    Col {col_idx+1}: Width {col_width}% (Blocks: {clean_blocks})")
        # Also print posts count
        posts = re.findall(r'<h[234]\s+class="[^"]*post-title[^"]*"[^>]*>.*?<a[^>]*>(.*?)</a>', col_body, re.DOTALL)
        print(f"      Posts count: {len(posts)}")
        for p in posts[:2]:
            p_clean = re.sub(r'<[^>]+>', '', p).strip()
            print(f"        - {p_clean}")
