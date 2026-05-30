import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\9fcd015d-8b45-4014-b4ae-9a065ed7544d\.system_generated\steps\450\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Let's search for mega-menus. They are inside sub-menu mega-menu wrapper:
# Let's search for all `item-mega-menu` elements and look inside them.
mega_menus = re.findall(r'<li id="([^"]+)" class="[^"]*item-mega-menu[^"]*"><a[^>]*>(.*?)</a>(.*?)</li>', html, re.DOTALL)
print(f"Found {len(mega_menus)} mega menus:")
for m_id, m_title, m_content in mega_menus:
    m_title = m_title.strip()
    print(f"\nMega Menu: {m_title} (ID: {m_id})")
    # Find all articles inside this mega menu content
    articles = re.findall(r'<article\s+class="([^"]+)"[^>]*>(.*?)</article>', m_content, re.DOTALL)
    print(f"  Articles count: {len(articles)}")
    for art_cls, art_content in articles:
        title_match = re.search(r'title="([^"]+)"', art_content)
        if not title_match:
            title_match = re.search(r'<a href="[^"]+">([^<]+)</a>', art_content)
        if not title_match:
            title_match = re.search(r'post-title.*?<a[^>]*>(.*?)</a>', art_content, re.DOTALL)
        art_title = title_match.group(1).strip() if title_match else "UNKNOWN"
        print(f"    - {art_title}")
