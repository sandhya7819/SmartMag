import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\ce4a9638-c04f-43b7-8e28-5af26863bf43\.system_generated\steps\400\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Let's search for block head and widgets titles
# E.g. <h3 class="heading"> or <h5 class="heading"> or block-head
headings = re.findall(r'<(h[1-6]|div)\s+[^>]*class="[^"]*(?:heading|block-head|widget-title|block-title)[^"]*"[^>]*>(.*?)</\1>', html, re.DOTALL)

print(f"Found {len(headings)} headings:")
for tag, content in headings:
    content_clean = re.sub(r'<[^>]+>', '', content).strip()
    if content_clean:
        print(f"  [{tag}] {content_clean}")
