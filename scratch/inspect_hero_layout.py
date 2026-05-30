import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\ce4a9638-c04f-43b7-8e28-5af26863bf43\.system_generated\steps\400\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Let's search for the elementor sections
sections = re.split(r'<section\s+class="[^"]*elementor-section[^"]*"', html)
if len(sections) > 2:
    sec2 = sections[2] # 1-based index (0 is text before first match)
    print("Section 2 classes:", re.search(r'class="([^"]*)"', sec2).group(1) if re.search(r'class="([^"]*)"', sec2) else "No Class")
    print("\nSection 2 HTML snippet:")
    print(sec2[:2000])
