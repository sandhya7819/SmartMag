path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\530e6607-1b75-4556-8c7c-88d5878350df\.system_generated\steps\386\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

hero_html = html[182985:191219]

# Let's find all occurrences of "<article" in hero_html
print(f"Occurrences of <article in Hero: {hero_html.count('<article')}")
# Let's find occurrences of "l-post" in hero_html
print(f"Occurrences of l-post in Hero: {hero_html.count('l-post')}")

# Let's find positions of "<article"
start = 0
while True:
    pos = hero_html.find("<article", start)
    if pos == -1:
        break
    print(f"Found <article at local pos {pos}:")
    print(hero_html[pos:pos+400])
    print("=" * 40)
    start = pos + 1
