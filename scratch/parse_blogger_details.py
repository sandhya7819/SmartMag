import re
import html
import json

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\ce4a9638-c04f-43b7-8e28-5af26863bf43\.system_generated\steps\400\content.md"

with open(path, "r", encoding="utf-8") as f:
    html_content = f.read()

# Let's find all <article> elements
articles_raw = re.findall(r'<article\s+class="([^"]+)"[^>]*>(.*?)</article>', html_content, re.DOTALL)

print(f"Found {len(articles_raw)} raw articles.")

posts = []
seen_titles = set()

for cls, body in articles_raw:
    # Title & Url
    title_match = re.search(r'<h[234][^>]*class="[^"]*post-title[^"]*"[^>]*>.*?<a\s+href="([^"]+)"[^>]*>(.*?)</a>', body, re.DOTALL)
    if not title_match:
        title_match = re.search(r'<a\s+href="([^"]+)"[^>]*title="([^"]+)"', body)
    if not title_match:
        title_match = re.search(r'<a\s+href="([^"]+)"[^>]*class="image-link[^"]*"[^>]*title="([^"]+)"', body)
    
    if not title_match:
        continue
        
    url, title = title_match.group(1), title_match.group(2)
    title = html.unescape(re.sub(r'<[^>]+>', '', title).strip())
    title = re.sub(r'\s+', ' ', title)
    
    if title in seen_titles:
        continue
    seen_titles.add(title)
    
    # Image URL
    img = ""
    img_match = re.search(r'data-bgsrc="([^"]+)"', body)
    if not img_match:
        img_match = re.search(r'src="([^"]+)"', body)
    if img_match:
        img = img_match.group(1)
        
    # Date
    date = ""
    date_match = re.search(r'<time[^>]*datetime="([^"]+)"[^>]*>(.*?)</time>', body)
    if date_match:
        date = date_match.group(2).strip()
    else:
        date_match = re.search(r'class="post-date"[^>]*>(.*?)<', body)
        if date_match:
            date = date_match.group(1).strip()
        else:
            date_match = re.search(r'class="meta-item date"[^>]*>(.*?)<', body)
            if date_match:
                date = date_match.group(1).strip()
            else:
                date_match = re.search(r'\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},\s+\d{4}\b', body)
                if date_match:
                    date = date_match.group(0)

    # Author
    author = "Shane Doe" # Default author
    author_match = re.search(r'class="meta-item post-author"[^>]*>.*?<a[^>]*>(.*?)</a>', body, re.DOTALL)
    if author_match:
        author = re.sub(r'<[^>]+>', '', author_match.group(1)).replace("By", "").strip()

    # Category
    cat = ""
    cat_match = re.search(r'<a\s+href="[^"]+category/([^/"]+)/?.*?class="category[^"]*"[^>]*>(.*?)</a>', body)
    if cat_match:
        cat = html.unescape(cat_match.group(2).strip())
    else:
        cat_match = re.search(r'class="category[^"]*"[^>]*>(.*?)</a>', body)
        if cat_match:
            cat = html.unescape(cat_match.group(1).strip())
        else:
            cat_match = re.search(r'category/example-\d+/[^>]*>(.*?)<', body)
            if cat_match:
                cat = cat_match.group(1).strip()
                
    # Review Rating
    rating = ""
    rating_match = re.search(r'class="counter percent">(\d+)</span>', body)
    if rating_match:
        rating = rating_match.group(1)
    else:
        rating_match = re.search(r'class="counter score">([\d.]+)</span>', body)
        if rating_match:
            rating = rating_match.group(1)
            
    is_video = "format-video" in cls or "format-video" in body or "tsi-play" in body
    is_gallery = "format-gallery" in cls or "format-gallery" in body or "tsi-picture-o" in body
    is_audio = "format-audio" in cls or "format-audio" in body or "tsi-audio" in body

    # Excerpt
    excerpt = ""
    excerpt_match = re.search(r'<div class="excerpt">(.*?)</div>', body, re.DOTALL)
    if excerpt_match:
        excerpt = html.unescape(re.sub(r'<[^>]+>', '', excerpt_match.group(1)).strip())
        excerpt = re.sub(r'\s+', ' ', excerpt)

    posts.append({
        "title": title,
        "url": "/blogger", # Redirect locally
        "img": img,
        "date": date,
        "author": author,
        "cat": cat,
        "rating": rating,
        "isVideo": is_video,
        "isGallery": is_gallery,
        "isAudio": is_audio,
        "excerpt": excerpt
    })

print(f"Parsed {len(posts)} unique posts:")
for idx, p in enumerate(posts):
    print(f"{idx+1}. {p['title']} [{p['cat']}] ({p['date']})")
    
# Write to JSON scratch file
with open("scratch/blogger_parsed_posts.json", "w", encoding="utf-8") as f:
    json.dump(posts, f, indent=2)
