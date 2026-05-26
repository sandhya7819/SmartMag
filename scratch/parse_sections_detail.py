import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\530e6607-1b75-4556-8c7c-88d5878350df\.system_generated\steps\386\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Let's find sections by class names
# The classes are:
# 1. elementor-element-52384a10
# 2. elementor-element-76edeafb
# 3. elementor-element-3dfed2bd
# 4. elementor-element-4d2ffaec
# 5. elementor-element-556a38c
# 6. elementor-element-4b2b8f43

elementor_sections = [
    ("Hero / Grid", "elementor-element-52384a10"),
    ("Leaderboard Ad", "elementor-element-76edeafb"),
    ("Lifestyle (Split)", "elementor-element-3dfed2bd"),
    ("Editor's Picks (Dark/Gray BG)", "elementor-element-4d2ffaec"),
    ("Travel & Tourism (Split)", "elementor-element-556a38c"),
    ("Latest Articles (Split)", "elementor-element-4b2b8f43")
]

def clean_html(text):
    text = re.sub('<[^<]+?>', '', text)
    text = text.replace('&#8217;', "'").replace('&#8211;', "–").replace('&amp;', "&").replace('’', "'").replace('‘', "'").replace('&#8220;', '"').replace('&#8221;', '"').strip()
    return text

for name, el_id in elementor_sections:
    print(f"\n==================================================")
    print(f"SECTION: {name} ({el_id})")
    print(f"==================================================")
    
    # We find the start of the section and the end of the section by looking at the HTML structure.
    # A simple search for the class name and then matching tags or finding the next section.
    pattern = rf'<section\s+class="[^"]*{el_id}[^"]*"[^>]*>(.*?)</section>'
    match = re.search(pattern, html, re.DOTALL)
    if not match:
        # Try a more relaxed match
        pattern = rf'elementor-element-{el_id}.*?<section(.*?)<\/section>'
        # Let's find the position of the class name and then grab the next 50000 chars
        pos = html.find(el_id)
        if pos != -1:
            segment = html[pos:pos+100000]
            # Find the closing tag or just search articles within the next 80000 chars
            # Let's find articles in this segment.
            # But wait, to be safe, let's just search for articles inside the segment.
            # How do we know when the segment ends? It ends before the next elementor-element-xxxxx class.
            next_pos = len(html)
            for _, other_id in elementor_sections:
                if other_id != el_id:
                    other_pos = html.find(other_id)
                    if other_pos > pos and other_pos < next_pos:
                        next_pos = other_pos
            segment = html[pos:next_pos]
        else:
            print("Not found!")
            continue
    else:
        segment = match.group(1)
        
    # Find block titles in this segment
    headings = re.findall(r'<h[1-6][^>]*class="heading"[^>]*>(.*?)</h[1-6]>', segment, re.DOTALL)
    block_titles = re.findall(r'<div class="[^"]*block-head[^"]*".*?<h[1-6][^>]*>(.*?)</h[1-6]>', segment, re.DOTALL)
    widget_titles = re.findall(r'<div class="widget-title[^>]*>(.*?)</div>', segment, re.DOTALL)
    
    print("Headings:")
    for h in headings:
        print(f"  - Heading: {clean_html(h)}")
    for h in block_titles:
        print(f"  - Block Head: {clean_html(h)}")
    for w in widget_titles:
        print(f"  - Widget Head: {clean_html(w)}")
        
    # Find all articles in this segment
    articles_in_seg = re.findall(r'<article\s+class="([^"]+)"[^>]*>(.*?)</article>', segment, re.DOTALL)
    print(f"Articles ({len(articles_in_seg)}):")
    for cls, art_content in articles_in_seg:
        # Extract title
        title_match = re.search(r'title="([^"]+)"', art_content)
        if not title_match:
            title_match = re.search(r'<a href="[^"]+">([^<]+)</a>', art_content)
        if not title_match:
            title_match = re.search(r'post-title.*?<a[^>]*>(.*?)</a>', art_content, re.DOTALL)
        
        title = clean_html(title_match.group(1)) if title_match else "UNKNOWN"
        cat_match = re.search(r'class="category[^"]*"[^>]*>(.*?)</a>', art_content)
        cat = clean_html(cat_match.group(1)) if cat_match else ""
        date_match = re.search(r'<time class="post-date"[^>]*>(.*?)</time>', art_content)
        date = date_match.group(1).strip() if date_match else ""
        
        # Check review score
        review_match = re.search(r'<div class="review [^>]*>.*?<span>(.*?)</span>', art_content, re.DOTALL)
        rating = review_match.group(1).strip() if review_match else ""
        
        print(f"  - Title: {title} | Cat: {cat} | Date: {date} | Rating: {rating}")
