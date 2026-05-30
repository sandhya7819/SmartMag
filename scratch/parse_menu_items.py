import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\9fcd015d-8b45-4014-b4ae-9a065ed7544d\.system_generated\steps\450\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Find the main menu block: <ul id="menu-main-menu" ...>
menu_search = re.search(r'<ul id="menu-main-menu"[^>]*>(.*?)</ul>\s*</nav>', html, re.DOTALL)
if menu_search:
    menu_html = menu_search.group(1)
    # Find all top-level list items and their sub-items
    items = re.findall(r'<li id="[^"]+" class="menu-item[^"]*"><a[^>]*>(.*?)</a>', menu_html)
    print("Found top-level menu items:")
    for item in items:
        print(" -", item.strip())
else:
    print("Main menu not found")

# Let's also find top navigation links (top stripe menu)
top_menu_search = re.search(r'<ul id="menu-top-nav"[^>]*>(.*?)</ul>', html, re.DOTALL)
if top_menu_search:
    top_menu_html = top_menu_search.group(1)
    top_items = re.findall(r'<li id="[^"]+" class="menu-item[^"]*"><a[^>]*>(.*?)</a>', top_menu_html)
    print("\nFound top stripe menu items:")
    for item in top_items:
        print(" -", item.strip())
else:
    print("Top stripe menu not found")
