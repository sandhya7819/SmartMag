import re
import json

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\9fcd015d-8b45-4014-b4ae-9a065ed7544d\.system_generated\steps\345\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Extract headings
headings = re.findall(r'<(h[1-6])(?:[^>]*)>(.*?)</\1>', html, re.DOTALL)
clean_headings = []
for h_type, content in headings:
    text = re.sub(r'<[^>]*>', '', content).strip()
    if text:
        clean_headings.append(f"{h_type}: {text}")

# Extract articles
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
        title_match = re.search(r'post-title.*?<a[^>]*>(.*?)</a>', content, re.DOTALL)
        if title_match:
            title = re.sub('<[^<]+?>', '', title_match.group(1)).strip()
            
    # Clean title
    if title:
        title = title.replace('&#8216;', "'").replace('&#8217;', "'").replace('&#8211;', "–").replace('&amp;', "&")
        title = title.replace('’', "'").replace('‘', "'").replace('&#8220;', '"').replace('&#8221;', '"')
        title = re.sub(r'\s+', ' ', title).strip()
    else:
        continue
        
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
    
    # Review details
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

# Deduplicate articles
unique_articles = {}
for art in articles:
    key = art["title"].lower().strip()
    if key not in unique_articles or (art["image"] and not unique_articles[key]["image"]):
        unique_articles[key] = art

# Output to text file
output_lines = []
output_lines.append("=== HEADINGS ===")
output_lines.extend(clean_headings[:150]) # limit to 150
output_lines.append("\n=== UNIQUE ARTICLES ===")
for title, art in unique_articles.items():
    output_lines.append(f"Title: {art['title']} | Cat: {art['category']} | Date: {art['date']} | Image: {art['image']} | Rating: {art['rating']}")

with open(r"c:\Users\SK-0010\WEBSITE-TEMPLATES\scratch\parsed_newsmag.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(output_lines))

print("Parsed data written successfully to scratch/parsed_newsmag.txt")
