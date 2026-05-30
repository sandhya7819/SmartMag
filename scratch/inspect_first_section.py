import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\ce4a9638-c04f-43b7-8e28-5af26863bf43\.system_generated\steps\400\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Let's find the first <section> inside the main-wrap or just the first elementor-section
match = re.search(r'(<section\s+class="[^"]*elementor-section[^"]*">.*?</section>)', html, re.DOTALL)
if match:
    section_html = match.group(1)
    print("Section 1 classes:", re.search(r'class="([^"]*)"', section_html).group(1))
    # Print the block-wrap class inside
    block_wrap = re.search(r'<section\s+class="([^"]*block-wrap[^"]*)"', section_html)
    if block_wrap:
        print("Block wrap class:", block_wrap.group(1))
    # Print some of the content to see layout
    print("Snippet:")
    print(section_html[:1500])
else:
    print("Not found")
