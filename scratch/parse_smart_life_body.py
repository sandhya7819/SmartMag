import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\530e6607-1b75-4556-8c7c-88d5878350df\.system_generated\steps\386\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

body_idx = html.find("<body")

elementor_sections = [
    ("Hero / Grid", "elementor-element-52384a10"),
    ("Leaderboard Ad", "elementor-element-76edeafb"),
    ("Lifestyle (Split)", "elementor-element-3dfed2bd"),
    ("Editor's Picks (Dark/Gray BG)", "elementor-element-4d2ffaec"),
    ("Travel & Tourism (Split)", "elementor-element-556a38c"),
    ("Latest Articles (Split)", "elementor-element-4b2b8f43")
]

section_positions = []
for name, el_id in elementor_sections:
    idx = html.find(el_id, body_idx)
    section_positions.append((name, el_id, idx))

# Sort by index
section_positions.sort(key=lambda x: x[2])

def clean_html(text):
    text = re.sub('<[^<]+?>', '', text)
    text = text.replace('&#8217;', "'").replace('&#8211;', "–").replace('&amp;', "&").replace('’', "'").replace('‘', "'").replace('&#8220;', '"').replace('&#8221;', '"').strip()
    return text

for i in range(len(section_positions)):
    name, el_id, start_pos = section_positions[i]
    end_pos = section_positions[i+1][2] if i+1 < len(section_positions) else len(html)
    
    segment = html[start_pos:end_pos]
    print(f"\n==================================================")
    print(f"SECTION: {name} (index {start_pos} to {end_pos})")
    print(f"==================================================")
    
    # Headings
    headings = re.findall(r'<h[1-6][^>]*>(.*?)</h[1-6]>', segment, re.DOTALL)
    print("Headings:")
    for h in headings:
        print(f"  - {clean_html(h)}")
        
    # Articles
    articles_in_seg = re.findall(r'<article\s+class="([^"]+)"[^>]*>(.*?)</article>', segment, re.DOTALL)
    print(f"Articles ({len(articles_in_seg)}):")
    for cls, art_content in articles_in_seg:
        title_match = re.search(r'title="([^"]+)"', art_content)
        if not title_match:
            title_match = re.search(r'<a href="[^"]+">([^<]+)</a>', art_content)
        if not title_match:
            title_match = re.search(r'post-title.*?<a[^>]*>(.*?)</a>', art_content, re.DOTALL)
        title = clean_html(title_match.group(1)) if title_match else "UNKNOWN"
        print(f"  - Title: {title} | Class: {cls}")
