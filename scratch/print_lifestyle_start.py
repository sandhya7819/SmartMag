path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\530e6607-1b75-4556-8c7c-88d5878350df\.system_generated\steps\386\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

pos_lifestyle = html.find("elementor-element-3dfed2bd")
pos_picks = html.find("elementor-element-4d2ffaec")

print(f"Lifestyle start: {pos_lifestyle}, picks: {pos_picks}")
print("First 1000 characters:")
print(html[pos_lifestyle:pos_lifestyle+1000])
