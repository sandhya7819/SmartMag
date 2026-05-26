import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\530e6607-1b75-4556-8c7c-88d5878350df\.system_generated\steps\386\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# We want to find sections inside the main-wrap or elementor-page
# Elementor pages are divided into sections <section class="elementor-section ...">
sections = re.findall(r'<section\s+class="([^"]*elementor-section[^"]*)"[^>]*>(.*?)</section>\s*<!--\s*\.elementor-section\s*-->', html, re.DOTALL)
print(f"Total elementor sections: {len(sections)}")

for i, (cls, content) in enumerate(sections):
    print(f"\nSection {i+1} class: {cls}")
    # Find all block-wrap or widget titles in this section
    block_wraps = re.findall(r'<section\s+class="([^"]*block-wrap[^"]*)"[^>]*>.*?<h[0-9]\s+class="heading">(.*?)</h[0-9]>', content, re.DOTALL)
    print("Block Wraps:")
    for bw_cls, heading in block_wraps:
        print(f"  - Block Wrap: {bw_cls.strip().split()[0]} | Heading: {re.sub('<[^<]+?>', '', heading).strip()}")
    
    # Also look for any widget or loop
    widgets = re.findall(r'<div\s+id="([^"]+)"\s+class="widget\s+([^"]+)"[^>]*>.*?<h[0-9]\s+class="heading">(.*?)</h[0-9]>', content, re.DOTALL)
    print("Widgets:")
    for wid, wcls, whead in widgets:
        print(f"  - Widget ID: {wid} | Head: {re.sub('<[^<]+?>', '', whead).strip()}")
        
    # Let's count articles in this section
    art_count = len(re.findall(r'<article\s+class="[^"]+"[^>]*>', content))
    print(f"Total articles in Section {i+1}: {art_count}")
