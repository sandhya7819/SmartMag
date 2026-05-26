import re
import json

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\6a4d7df6-5304-45ab-9322-eff7dbfbfde4\.system_generated\steps\49\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Let's find all images associated with articles.
# We will match the article titles to their images in html.
# In WordPress theme, a post title might appear in a heading, and an image link in the same parent.
# Let's search for '<article ...' block and parse it carefully.

article_blocks = re.findall(r'<article\s+class="[^"]+"[^>]*>(.*?)</article>', html, re.DOTALL)
title_to_img = {}

for block in article_blocks:
    # Get title
    title_m = re.search(r'title="([^"]+)"', block)
    if not title_m:
        title_m = re.search(r'<a href="[^"]+">([^<]+)</a>', block)
    if not title_m:
        # Search for post-title anchor
        title_m = re.search(r'post-title.*?<a[^>]*>(.*?)</a>', block, re.DOTALL)
        
    if title_m:
        title_str = title_m.group(1)
        # strip HTML tags if any
        title_str = re.sub(r'<[^<]+?>', '', title_str).strip()
        title_str = title_str.replace('&#8217;', "'").replace('&#8211;', "–").replace('&amp;', "&").replace('', "'").strip()
    else:
        continue
        
    # Get image
    img_str = ""
    # Try data-bgsrc
    img_m = re.search(r'data-bgsrc="([^"]+)"', block)
    if not img_m:
        img_m = re.search(r'src="([^"]+)"', block)
    if img_m:
        img_str = img_m.group(1)
        
    if title_str and img_str:
        # Clean image if it has sizes
        # e.g., Depositphotos_...-300x200.jpeg, let's keep it as is or expand
        title_to_img[title_str.lower()] = img_str

print(f"Mapped {len(title_to_img)} titles to images.")

# Let's read the current lib/newsOne24Data.ts
ts_path = r"c:\Users\SK-0010\WEBSITE-TEMPLATES\lib\newsOne24Data.ts"
with open(ts_path, "r", encoding="utf-8") as f:
    ts_content = f.read()

# Let's find all Unsplash placeholders or wrong images in ts_content and replace them with correct ones if mapped.
# A post looks like:
# {
#   "title": "...",
#   "image": "...",
#   ...
# }

# Let's parse all JSON objects or just replace using regex.
# Actually, since it's valid JSON blocks, we can extract them, replace image, and reconstruct.
# But wait, it's easier to load the json data we constructed in build_ts_data.py, update it, and rewrite!
# Let's modify build_ts_data.py directly to use the title_to_img dictionary.
# Let's write a new build_ts_data.py that incorporates this.
