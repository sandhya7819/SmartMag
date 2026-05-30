import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\9fcd015d-8b45-4014-b4ae-9a065ed7544d\.system_generated\steps\450\content.md"
output_path = r"c:\Users\SK-0010\WEBSITE-TEMPLATES\scratch\parsed_bethechange.txt"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

def clean_html(text):
    text = re.sub('<[^<]+?>', '', text)
    text = text.replace('&#8217;', "'").replace('&#8211;', "–").replace('&amp;', "&").replace('’', "'").replace('‘', "'").replace('&#8220;', '"').replace('&#8221;', '"').strip()
    text = text.replace('&#8216;', "'").replace('&#038;', "&").replace('&quot;', '"')
    return text

# Find primary main brand colors or variables
colors = re.findall(r'--c-brand:\s*([^;]+);', html)
main_colors = re.findall(r'--c-main:\s*([^;]+);', html)
print(f"Brand colors: {colors}, Main colors: {main_colors}")

# Find sections or blocks
blocks = re.findall(r'<section\s+class="block-wrap\s+([^"]+)"\s+data-id="(\d+)"[^>]*>(.*?)</section>', html, re.DOTALL)

output = []
output.append(f"BRAND COLORS: {colors}")
output.append(f"MAIN COLORS: {main_colors}")
output.append(f"FOUND {len(blocks)} BLOCKS")

for cls, data_id, content in blocks:
    title_match = re.search(r'<div class="[^"]*block-head[^"]*".*?<h[1-6][^>]*>(.*?)</h[1-6]>', content, re.DOTALL)
    title = clean_html(title_match.group(1)) if title_match else "No Head"
    
    output.append(f"\n==========================================")
    output.append(f"BLOCK: {title} (ID: {data_id}, Class: {cls})")
    output.append(f"==========================================")
    
    # Find articles
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
        
        output.append(f"  - [{cat}] {art_title} | Date: {date} | Rating: {rating} | Img: {img} | Class: {art_cls}")

# Let's also check for widgets that are not inside block-wrap
widgets = re.findall(r'<div id="([^"]+)" class="widget ts-block-widget\s+([^"]+)"[^>]*>(.*?)</div>\s*</div>', html, re.DOTALL)
output.append(f"\nFOUND {len(widgets)} WIDGETS")
for wid_id, wid_cls, wid_content in widgets:
    title_match = re.search(r'<h[1-6] class="heading">(.*?)</h[1-6]>', wid_content)
    title = clean_html(title_match.group(1)) if title_match else "No Head"
    output.append(f"\nWIDGET: {title} (ID: {wid_id}, Class: {wid_cls})")
    
    articles = re.findall(r'<article\s+class="([^"]+)"[^>]*>(.*?)</article>', wid_content, re.DOTALL)
    for art_cls, art_content in articles:
        title_match = re.search(r'title="([^"]+)"', art_content)
        if not title_match:
            title_match = re.search(r'<a href="[^"]+">([^<]+)</a>', art_content)
        if not title_match:
            title_match = re.search(r'post-title.*?<a[^>]*>(.*?)</a>', art_content, re.DOTALL)
        art_title = clean_html(title_match.group(1)) if title_match else "UNKNOWN"
        
        date_match = re.search(r'<time class="post-date"[^>]*>(.*?)</time>', art_content)
        date = date_match.group(1).strip() if date_match else ""
        
        img_match = re.search(r'data-bgsrc="([^"]+)"', art_content)
        if not img_match:
            img_match = re.search(r'src="([^"]+)"', art_content)
        img = img_match.group(1) if img_match else ""
        
        output.append(f"  - {art_title} | Date: {date} | Img: {img}")

with open(output_path, "w", encoding="utf-8") as f:
    f.write("\n".join(output))

print(f"Successfully wrote parsed details to {output_path}")
