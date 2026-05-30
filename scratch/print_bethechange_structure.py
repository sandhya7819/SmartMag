import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\9fcd015d-8b45-4014-b4ae-9a065ed7544d\.system_generated\steps\450\content.md"
output_path = r"c:\Users\SK-0010\WEBSITE-TEMPLATES\scratch\bethechange_structure.txt"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Let's clean the HTML slightly for matching or matching nested tags
# Let's find tags like <div class="main-wrap"> and everything in it
# We want to identify the grid layout.
# We can find all class names of main-wrap's children or direct container structures.

# Let's search for the start of the layout:
# e.g., <div class="main-wrap">
# Let's look for tags like:
# - <div class="smart-head ...">
# - <div class="main-wrap">
# - <div class="ts-contain"> or similar container divs
# - <div class="row"> or <div class="grid"> or layout classes
# Let's do a search for container divs inside body:

body_search = re.search(r'<div class="main-wrap">(.*?)<footer', html, re.DOTALL)
if body_search:
    body_content = body_search.group(1)
    # Let's print out the first 500 characters of each major block or section we find
    sections = re.findall(r'<div class="elementor-section-wrap">(.*?)</div>\s*</div>', body_content, re.DOTALL)
    print(f"Found {len(sections)} elementor sections")
else:
    print("main-wrap not found")

# Let's also look for footer contents
footer_search = re.search(r'<footer(.*?)</footer>', html, re.DOTALL)
footer_html = footer_search.group(1) if footer_search else "No footer"

# Let's write the first 10000 chars of body_content to structure file
with open(output_path, "w", encoding="utf-8") as f:
    f.write("BODY LAYOUT TAGS:\n")
    # Let's find all occurrences of:
    # <div class="elementor-element elementor-element-... elementor-column ...">
    # <div class="elementor-widget-container">
    # <section class="block-wrap ...">
    # We will match those tags and their hierarchy in order:
    pos = 0
    pattern = re.compile(r'<(section|div|footer|header)\s+[^>]*class="([^"]*)"[^>]*>', re.IGNORECASE)
    matches = []
    for m in pattern.finditer(html):
        tag = m.group(1)
        cls = m.group(2)
        # Filter for interesting class names
        if any(x in cls for x in ["main-wrap", "smart-head", "ts-contain", "elementor-section", "elementor-column", "elementor-row", "block-wrap", "widget-title", "widget ts-block-widget", "spc-newsletter", "spc-social"]):
            matches.append((m.start(), tag, cls))
    
    # Sort matches and print
    for start, tag, cls in matches:
        f.write(f"Pos {start}: <{tag} class=\"{cls}\">\n")

print("Wrote structure to scratch/bethechange_structure.txt")
