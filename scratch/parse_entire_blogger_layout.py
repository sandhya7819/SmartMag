import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\ce4a9638-c04f-43b7-8e28-5af26863bf43\.system_generated\steps\400\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Let's find all divs with class "elementor-section"
# Inside each section, find all elements with class "elementor-container"
# Inside each container, find all top-level columns "elementor-column"
# For each column, check if it contains inner sections, or just widgets.

# Let's extract elementor-sections in order
sections = re.findall(r'<section\s+[^>]*class="[^"]*elementor-section[^"]*"[^>]*>(.*?)</section>\s*(?=<section|<!-- \.elementor-section -->|</div>\s*</div>\s*</main>|<div class="off-canvas-backdrop"|$)', html, re.DOTALL)

print(f"Total elementor sections in body: {len(sections)}")

for s_idx, sec_body in enumerate(sections, 1):
    # Find section data-id and class
    # Let's search class in section start tag. Wait, since re.findall gets the body, let's look for matching classes or ids.
    # To do this cleanly, let's find the start tag using finditer
    pass

# Let's write a simpler regex-based parser that scans the HTML in order and prints all containers, columns, blocks, and headings.
print("Scanning HTML in order...")
pos = 0
matches = []

# Regexes for starting elements
sec_re = re.compile(r'<section\s+[^>]*class="([^"]*elementor-section\s+[^"]*)"[^>]*>')
con_re = re.compile(r'<div\s+[^>]*class="([^"]*elementor-container\s+[^"]*)"[^>]*>')
col_re = re.compile(r'<div\s+[^>]*class="([^"]*elementor-column\s+[^"]*elementor-col-(\d+)[^"]*)"[^>]*>')
block_re = re.compile(r'<section\s+[^>]*class="([^"]*block-wrap\s+[^"]*)"[^>]*>')
head_re = re.compile(r'<(h[1-6]|div)\s+[^>]*class="[^"]*(?:heading|block-head|widget-title|block-title)[^"]*"[^>]*>(.*?)</\1>', re.DOTALL)
post_re = re.compile(r'<article\s+class="([^"]*)"[^>]*>.*?(?:<a[^>]*class="category[^"]*"[^>]*>(.*?)</a>|).*?<h[2-4]\s+class="[^"]*post-title[^"]*"[^>]*>.*?<a[^>]*>(.*?)</a>', re.DOTALL)

# Let's scan token by token or by searching for tags
# We can search for tags: <section, <div, <article
tag_matches = []
for m in re.finditer(r'<(section|div|article)\s+[^>]*class="([^"]*)"[^>]*>', html):
    tag = m.group(1)
    cls = m.group(2)
    start = m.start()
    
    # Check what kind of tag it is
    if "elementor-section" in cls:
        tag_matches.append((start, "sec", cls))
    elif "elementor-container" in cls:
        tag_matches.append((start, "con", cls))
    elif "elementor-column" in cls:
        width_m = re.search(r'elementor-col-(\d+)', cls)
        width = width_m.group(1) if width_m else "unknown"
        tag_matches.append((start, "col", f"width {width}% | {cls[:40]}"))
    elif "block-wrap" in cls:
        tag_matches.append((start, "block", cls))

print(f"Found {len(tag_matches)} key elements.")

# Let's print their sequential order, but only inside the main-wrap body
# Find main-wrap start
main_pos = html.find('<div class="main-wrap">')
main_end = html.rfind('</div>\s*<!-- \.main-wrap -->') # or similar, or just end of file

# Filter key elements inside main-wrap
filtered = [tm for tm in tag_matches if tm[0] > main_pos]

# Let's trace their structure
indent = 0
for start, tag_type, cls in filtered:
    # Let's extract headings and posts between this element and the next one
    # Find next element start
    # Let's print
    if tag_type == "sec":
        print(f"Section: {cls[:80]}")
    elif tag_type == "con":
        print(f"  Container: {cls[:80]}")
    elif tag_type == "col":
        print(f"    Column: {cls}")
    elif tag_type == "block":
        # Find next tag_type start
        # Let's search inside this block's content (e.g. 5000 chars)
        block_content = html[start:start+10000]
        # Find block headings
        heads = head_re.findall(block_content[:4000])
        clean_heads = [re.sub(r'<[^>]+>', '', h[1]).strip() for h in heads]
        clean_heads = [re.sub(r'\s+', ' ', h) for h in clean_heads]
        # Find posts
        posts = post_re.findall(block_content[:10000])
        clean_posts = [re.sub(r'<[^>]+>', '', p[2]).strip() for p in posts[:4]]
        print(f"      Block-Wrap: {cls[:60]}")
        if clean_heads:
            print(f"        Headings: {clean_heads}")
        if clean_posts:
            print(f"        Posts: {clean_posts}")
