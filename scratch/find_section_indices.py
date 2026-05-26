path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\530e6607-1b75-4556-8c7c-88d5878350df\.system_generated\steps\386\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

body_idx = html.find("<body")

elementor_sections = [
    ("Hero / Grid", "elementor-element-52384a10"),
    ("Leaderboard Ad", "elementor-element-76edeafb"),
    ("Lifestyle (Split)", "elementor-element-3dfed2bd"),
    ("Editor's Picks (Dark/Gray BG)", "elementor-element-4d2ffaec"),
    ("Travel & Tourism (Split)", "elementor-element-556a38c"),
    ("Latest Articles (Split)", "elementor-element-4b2b8f43")
]

for name, el_id in elementor_sections:
    idx = html.find(el_id, body_idx)
    print(f"{name} ({el_id}): index={idx}")

# Let's search where "Beats", "Debit Card", "Chaucer" are located relative to these indices.
print(f"Beats index: {html.find('Beats Studio Pro Headphones', body_idx)}")
print(f"Debit Card index: {html.find('Debit Card', body_idx)}")
print(f"Chaucer index: {html.find('Chaucer', body_idx)}")
