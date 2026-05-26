import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\6a4d7df6-5304-45ab-9322-eff7dbfbfde4\.system_generated\steps\49\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

article_blocks = re.findall(r'<article\s+class="[^"]+"[^>]*>(.*?)</article>', html, re.DOTALL)
print("Mapped posts:")
for block in article_blocks[:10]:
    title_m = re.search(r'title="([^"]+)"', block)
    if not title_m:
        title_m = re.search(r'<a href="[^"]+">([^<]+)</a>', block)
    if title_m:
        title = title_m.group(1)
        title = re.sub(r'<[^<]+?>', '', title).strip()
        print("MATCHED:", title)
    else:
        print("NO MATCH FOR BLOCK")
