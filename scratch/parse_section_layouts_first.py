import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\ce4a9638-c04f-43b7-8e28-5af26863bf43\.system_generated\steps\400\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

section_blocks = re.findall(r'<section\s+class="([^"]*block-wrap[^"]*)"[^>]*>(.*?)</section>', html, re.DOTALL)

for idx, (cls, body) in enumerate(section_blocks[:17], 1):
    heads = re.findall(r'<(h[1-6]|div)\s+[^>]*class="[^"]*(?:heading|block-head|widget-title|block-title)[^"]*"[^>]*>(.*?)</\1>', body, re.DOTALL)
    clean_heads = []
    for tag, content in heads:
        content_clean = re.sub(r'<[^>]+>', '', content).strip()
        content_clean = re.sub(r'\s+', ' ', content_clean)
        clean_heads.append(content_clean)

    posts = re.findall(r'<article\s+class="([^"]*)"[^>]*>.*?(?:<a[^>]*class="category[^"]*"[^>]*>(.*?)</a>|).*?<h[2-4]\s+class="[^"]*post-title[^"]*"[^>]*>.*?<a[^>]*>(.*?)</a>', body, re.DOTALL)
    
    print(f"\n--- Block {idx} ---")
    print(f"  Class: {cls}")
    print(f"  Headings: {clean_heads}")
    print(f"  Posts Count: {len(posts)}")
    for p_idx, (post_cls, cat, title) in enumerate(posts[:4], 1):
        title_clean = re.sub(r'<[^>]+>', '', title).strip()
        cat_clean = re.sub(r'<[^>]+>', '', cat).strip() if cat else "No Cat"
        print(f"    {p_idx}. Title: {title_clean} | Cat: {cat_clean} | Class: {post_cls}")
