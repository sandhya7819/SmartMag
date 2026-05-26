import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\530e6607-1b75-4556-8c7c-88d5878350df\.system_generated\steps\386\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

pos_hero = html.find("elementor-element-52384a10")
pos_ad = html.find("elementor-element-76edeafb")

if pos_hero != -1 and pos_ad != -1:
    hero_section_html = html[pos_hero:pos_ad]
    # Find all articles in this segment
    articles_in_hero = re.findall(r'<article\s+class="([^"]+)"[^>]*>(.*?)</article>', hero_section_html, re.DOTALL)
    print(f"Total articles in Hero Section segment: {len(articles_in_hero)}")
    for cls, art_content in articles_in_hero:
        title_match = re.search(r'title="([^"]+)"', art_content)
        if not title_match:
            title_match = re.search(r'<a href="[^"]+">([^<]+)</a>', art_content)
        if not title_match:
            title_match = re.search(r'post-title.*?<a[^>]*>(.*?)</a>', art_content, re.DOTALL)
        title = title_match.group(1).strip() if title_match else "UNKNOWN"
        print(f"  - Title: {title} | Class: {cls}")
else:
    print("Positions not found!")
