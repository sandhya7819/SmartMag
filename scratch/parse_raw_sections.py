import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\530e6607-1b75-4556-8c7c-88d5878350df\.system_generated\steps\386\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Let's search for all <section tags
sections = re.findall(r'<section\s+class="([^"]+)"[^>]*>', html)
print(f"Total sections: {len(sections)}")
for i, s in enumerate(sections[:30]):
    print(f"{i+1}. {s}")
