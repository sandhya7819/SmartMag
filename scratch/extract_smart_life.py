import re
import json

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\530e6607-1b75-4556-8c7c-88d5878350df\.system_generated\steps\386\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# We want to find all article blocks.
# Let's extract all articles.
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
        title_match = re.search(r'is-title post-title.*?<a[^>]*>(.*?)</a>', content, re.DOTALL)
        if title_match:
            title = re.sub('<[^<]+?>', '', title_match.group(1)).strip()
            
    # Clean title entities
    if title:
        title = title.replace('&#8217;', "'").replace('&#8211;', "–").replace('&amp;', "&").replace('’', "'").replace('‘', "'").replace('&#8220;', '"').replace('&#8221;', '"').strip()
    
    # Extract category
    cat_match = re.search(r'class="category[^"]*"[^>]*>(.*?)</a>', content)
    cat = cat_match.group(1).strip() if cat_match else ""
    if cat:
        cat = cat.replace('&amp;', "&").strip()
    
    # Extract image src/bgsrc
    img_match = re.search(r'data-bgsrc="([^"]+)"', content)
    if not img_match:
        img_match = re.search(r'src="([^"]+)"', content)
    img = img_match.group(1) if img_match else ""
    
    # Extract excerpt
    excerpt_match = re.search(r'<div class="excerpt">(.*?)</div>', content, re.DOTALL)
    if excerpt_match:
        excerpt = re.sub('<[^<]+?>', '', excerpt_match.group(1)).replace('’', "'").replace('‘', "'").replace('&hellip;', '...').strip()
    else:
        excerpt = ""
        
    # Extract date
    date_match = re.search(r'<time class="post-date"[^>]*>(.*?)</time>', content)
    date = date_match.group(1).strip() if date_match else ""
    
    # Review details (rating, percentage)
    rating_match = re.search(r'<div class="review [^>]*>.*?<span>(.*?)</span>', content, re.DOTALL)
    rating = rating_match.group(1).strip() if rating_match else ""
    
    articles.append({
        "class": cls,
        "title": title,
        "category": cat,
        "image": img,
        "date": date,
        "excerpt": excerpt,
        "rating": rating
    })

print(f"Total articles found: {len(articles)}")

# Print unique articles
unique_articles = {}
for art in articles:
    if not art["title"]:
        continue
    key = art["title"].lower()
    if key not in unique_articles or (art["image"] and not unique_articles[key]["image"]):
        unique_articles[key] = art

print(f"Total unique articles: {len(unique_articles)}")
for i, (k, art) in enumerate(list(unique_articles.items())[:40]):
    print(f"{i+1}. Title: {art['title']}")
    print(f"   Cat: {art['category']} | Date: {art['date']} | Rating: {art['rating']}")
    print(f"   Img: {art['image']}")
    print(f"   Excerpt: {art['excerpt']}")
    print("-" * 50)
