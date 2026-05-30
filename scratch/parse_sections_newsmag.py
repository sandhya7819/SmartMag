import re
import json

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\9fcd015d-8b45-4014-b4ae-9a065ed7544d\.system_generated\steps\345\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Let's find sections or block-wraps in the page.
# Standard block classes: block-wrap, elementor-section, widget, etc.
# We will use BeautifulSoup or regular expressions to find all block-wraps.
# Let's use regex to find all block-wraps:
blocks = re.findall(r'<section\s+class="block-wrap\s+([^"]+)"\s+data-id="(\d+)"[^>]*>(.*?)</section>', html, re.DOTALL)

def clean_html(text):
    text = re.sub('<[^<]+?>', '', text)
    text = text.replace('&#8217;', "'").replace('&#8211;', "–").replace('&amp;', "&").replace('’', "'").replace('‘', "'").replace('&#8220;', '"').replace('&#8221;', '"').strip()
    # Replace other html entities
    text = text.replace('&#8216;', "'").replace('&#038;', "&").replace('&quot;', '"')
    return text

print(f"Found {len(blocks)} block-wrap sections:")
output = []

for cls, data_id, content in blocks:
    title_match = re.search(r'<div class="[^"]*block-head[^"]*".*?<h[1-6][^>]*>(.*?)</h[1-6]>', content, re.DOTALL)
    title = clean_html(title_match.group(1)) if title_match else "No Head"
    
    output.append(f"\n==========================================")
    output.append(f"BLOCK: {title} (ID: {data_id}, Class: {cls})")
    output.append(f"==========================================")
    
    # Find all articles
    articles = re.findall(r'<article\s+class="([^"]+)"[^>]*>(.*?)</article>', content, re.DOTALL)
    for art_cls, art_content in articles:
        # Extract title
        title_match = re.search(r'title="([^"]+)"', art_content)
        if not title_match:
            title_match = re.search(r'<a href="[^"]+">([^<]+)</a>', art_content)
        if not title_match:
            title_match = re.search(r'post-title.*?<a[^>]*>(.*?)</a>', art_content, re.DOTALL)
        
        art_title = clean_html(title_match.group(1)) if title_match else "UNKNOWN"
        
        cat_match = re.search(r'class="category[^"]*"[^>]*>(.*?)</a>', art_content)
        cat = clean_html(cat_match.group(1)) if cat_match else ""
        
        date_match = re.search(r'<time class="post-date"[^>]*>(.*?)</time>', art_content)
        date = date_match.group(1).strip() if date_match else ""
        
        review_match = re.search(r'<div class="review [^>]*>.*?<span>(.*?)</span>', art_content, re.DOTALL)
        rating = review_match.group(1).strip() if review_match else ""
        
        img_match = re.search(r'data-bgsrc="([^"]+)"', art_content)
        if not img_match:
            img_match = re.search(r'src="([^"]+)"', art_content)
        img = img_match.group(1) if img_match else ""
        
        output.append(f"  - [{cat}] {art_title} | Date: {date} | Rating: {rating} | Img: {img}")

with open(r"c:\Users\SK-0010\WEBSITE-TEMPLATES\scratch\parsed_sections_newsmag.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(output))

print("Created scratch/parsed_sections_newsmag.txt")
