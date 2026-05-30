import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\ce4a9638-c04f-43b7-8e28-5af26863bf43\.system_generated\steps\400\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Let's find all <section> tags with block-wrap in the main content (inside main-wrap)
# We can search for block-wrap classes
blocks = re.findall(r'<section\s+class="([^"]*block-wrap[^"]*)"[^>]*>(.*?)</section>', html, re.DOTALL)
print(f"Found {len(blocks)} block-wrap sections:")

for idx, (cls, body) in enumerate(blocks):
    head_match = re.search(r'<div[^>]*class="[^"]*(?:block-head|widget-title|block-title)[^"]*"[^>]*>(.*?)</div>', body, re.DOTALL)
    head_text = re.sub(r'<[^>]+>', '', head_match.group(1)).strip() if head_match else "No Header"
    head_text = re.sub(r'\s+', ' ', head_text)
    
    # Let's find post titles inside this block
    posts = re.findall(r'<h[234]\s+class="[^"]*post-title[^"]*"[^>]*>.*?<a[^>]*>(.*?)</a>', body, re.DOTALL)
    print(f"\n{idx+1}. Block: {head_text}")
    print(f"   Class: {cls}")
    print(f"   Post count: {len(posts)}")
    for p in posts[:4]:
        p_clean = re.sub(r'<[^>]+>', '', p).strip()
        print(f"     - {p_clean}")
