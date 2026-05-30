import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\ce4a9638-c04f-43b7-8e28-5af26863bf43\.system_generated\steps\400\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Let's search for "ts-sticky-native" and print the next 2000 characters of each
matches = [m.start() for m in re.finditer("ts-sticky-native", html)]
print(f"Found {len(matches)} ts-sticky-native columns:")

for idx, pos in enumerate(matches, 1):
    sub = html[pos:pos+2500]
    # Search for headings inside this column block
    heads = re.findall(r'<(h[1-6]|div)\s+[^>]*class="[^"]*(?:heading|block-head|widget-title|block-title)[^"]*"[^>]*>(.*?)</\1>', sub, re.DOTALL)
    clean_heads = [re.sub(r'<[^>]+>', '', h[1]).strip() for h in heads]
    clean_heads = [re.sub(r'\s+', ' ', h) for h in clean_heads]
    
    print(f"\nSticky Column {idx}:")
    print(f"  Headings: {clean_heads}")
    # Also print some of the HTML classes
    print(f"  Snippet:")
    print(html[pos:pos+500])
