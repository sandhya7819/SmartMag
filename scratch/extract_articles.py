import re
import json

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\6a4d7df6-5304-45ab-9322-eff7dbfbfde4\.system_generated\steps\49\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Let's extract all articles.
# An article looks like:
# <article class="..."> ... </article>
# We can find all articles and extract titles, links, image URLs, categories, dates, etc.

articles = []
article_matches = re.finditer(r'<article\s+class="([^"]+)"[^>]*>(.*?)</article>', html, re.DOTALL)

for match in article_matches:
    cls = match.group(1)
    content = match.group(2)
    
    # Extract title
    title_match = re.search(r'title="([^"]+)"', content)
    if not title_match:
        title_match = re.search(r'<a href="[^"]+">([^<]+)</a>', content)
    title = title_match.group(1).strip() if title_match else ""
    if not title:
        # try another pattern
        title_match = re.search(r'is-title post-title.*?<a[^>]*>(.*?)</a>', content, re.DOTALL)
        if title_match:
            title = re.sub('<[^<]+?>', '', title_match.group(1)).strip()
            
    # Extract category
    cat_match = re.search(r'class="category[^"]*"[^>]*>(.*?)</a>', content)
    cat = cat_match.group(1).strip() if cat_match else ""
    
    # Extract image src/bgsrc
    img_match = re.search(r'data-bgsrc="([^"]+)"', content)
    if not img_match:
        img_match = re.search(r'src="([^"]+)"', content)
    img = img_match.group(1) if img_match else ""
    
    # Extract excerpt
    excerpt_match = re.search(r'<div class="excerpt">(.*?)</div>', content, re.DOTALL)
    if excerpt_match:
        excerpt = re.sub('<[^<]+?>', '', excerpt_match.group(1)).strip()
    else:
        excerpt = ""
        
    # Extract date
    date_match = re.search(r'<time class="post-date"[^>]*>(.*?)</time>', content)
    date = date_match.group(1).strip() if date_match else ""
    
    articles.append({
        "class": cls,
        "title": title,
        "category": cat,
        "image": img,
        "date": date,
        "excerpt": excerpt
    })

print(f"Total articles found: {len(articles)}")
for i, art in enumerate(articles[:30]):
    print(f"{i+1}. Title: {art['title']}\n   Cat: {art['category']}\n   Img: {art['image']}\n   Date: {art['date']}\n   Excerpt: {art['excerpt']}\n")
