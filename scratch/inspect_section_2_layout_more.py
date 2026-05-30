import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\ce4a9638-c04f-43b7-8e28-5af26863bf43\.system_generated\steps\400\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Find the section containing "Courts Have Blocked a Number of The Anti-LGBTQ Laws"
pos = html.find("Courts Have Blocked a Number of The Anti-LGBTQ Laws")
if pos != -1:
    # Print the start of this section up to the next section or container
    # Let's search backwards for the nearest `<section` tag and print 8000 characters
    sec_start = html.rfind('<section', 0, pos)
    print("Section start position:", sec_start)
    print("Content snippet:")
    print(html[sec_start:sec_start+6000])
else:
    print("Not found")
