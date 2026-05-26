path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\530e6607-1b75-4556-8c7c-88d5878350df\.system_generated\steps\386\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

keywords = ["Dubai Sees", "Singer Hints", "France Lays", "Jellyfish"]

for kw in keywords:
    pos = html.find(kw)
    if pos != -1:
        print(f"\nFound keyword: {kw}")
        # Print 1000 characters around it
        print(html[pos-300:pos+700])
    else:
        print(f"Keyword not found: {kw}")
