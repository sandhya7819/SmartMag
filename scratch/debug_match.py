import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\6a4d7df6-5304-45ab-9322-eff7dbfbfde4\.system_generated\steps\49\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

article_blocks = re.findall(r'<article\s+class="[^"]+"[^>]*>(.*?)</article>', html, re.DOTALL)
title_to_post = {}

for block in article_blocks:
    title_m = re.search(r'title="([^"]+)"', block)
    if not title_m:
        title_m = re.search(r'<a href="[^"]+">([^<]+)</a>', block)
    if title_m:
        title = title_m.group(1)
        title = re.sub(r'<[^<]+?>', '', title).strip()
        title = title.replace('&#8217;', "'").replace('&#8211;', "–").replace('&amp;', "&").replace('', "'").strip()
        title_to_post[title.lower()] = title

print("Keys in title_to_post:")
for k in list(title_to_post.keys())[:10]:
    print(repr(k))

search_key = "Russian Military Objectives and Capacity in Ukraine Through 2024".lower()
print("\nIs search_key in title_to_post?", search_key in title_to_post)
if not search_key in title_to_post:
    print("search_key:", repr(search_key))
    for k in title_to_post.keys():
        if "russian" in k:
            print("Almost matched key:", repr(k))
