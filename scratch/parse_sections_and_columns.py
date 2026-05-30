import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\ce4a9638-c04f-43b7-8e28-5af26863bf43\.system_generated\steps\400\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Let's split by <section class="elementor-section
sections = re.split(r'<section\s+class="[^"]*elementor-section[^"]*"', html)
print(f"Found {len(sections)-1} elementor sections in body:")

for i, sec in enumerate(sections[1:], 1):
    print(f"\n--- SECTION {i} ---")
    # Let's find columns in this section
    # We find class matching elementor-column and elementor-col-XX
    col_matches = re.finditer(r'<div\s+class="([^"]*elementor-column\s+[^"]*elementor-col-[^"]*)"', sec)
    cols_found = []
    for cm in col_matches:
        cls = cm.group(1)
        width_match = re.search(r'elementor-col-(\d+)', cls)
        width = width_match.group(1) if width_match else "unknown"
        # Find the text between this column start and the next column start or end of section
        cols_found.append((cm.start(), cls, width))
    
    if not cols_found:
        print("  No columns found")
        # Find headers directly
        heads = re.findall(r'<(h[1-6]|div)\s+[^>]*class="[^"]*(?:heading|block-head|widget-title|block-title)[^"]*"[^>]*>(.*?)</\1>', sec, re.DOTALL)
        if heads:
            print("  Direct Headings in section:")
            for tag, content in heads:
                content_clean = re.sub(r'<[^>]+>', '', content).strip()
                print(f"    [{tag}] {content_clean}")
        continue

    for idx, (pos, cls, width) in enumerate(cols_found):
        next_pos = cols_found[idx+1][0] if idx + 1 < len(cols_found) else len(sec)
        col_content = sec[pos:next_pos]
        
        # Extract headers inside this column
        heads = re.findall(r'<(h[1-6]|div)\s+[^>]*class="[^"]*(?:heading|block-head|widget-title|block-title)[^"]*"[^>]*>(.*?)</\1>', col_content, re.DOTALL)
        clean_heads = []
        for tag, content in heads:
            content_clean = re.sub(r'<[^>]+>', '', content).strip()
            content_clean = re.sub(r'\s+', ' ', content_clean)
            clean_heads.append(f"[{tag}] {content_clean}")
            
        posts = re.findall(r'<h[234]\s+class="[^"]*post-title[^"]*"[^>]*>.*?<a[^>]*>(.*?)</a>', col_content, re.DOTALL)
        clean_posts = [re.sub(r'<[^>]+>', '', p).strip() for p in posts[:2]]
        
        print(f"  Col {idx+1}: Width {width}% | Classes: {cls[:80]}")
        if clean_heads:
            print(f"    Headings: {clean_heads}")
        if clean_posts:
            print(f"    First {len(clean_posts)} posts:")
            for p in clean_posts:
                print(f"      - {p}")
