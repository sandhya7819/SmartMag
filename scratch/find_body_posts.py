path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\530e6607-1b75-4556-8c7c-88d5878350df\.system_generated\steps\386\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Let's find body start
body_idx = html.find("<body")

# Find occurrences after body_idx
idx_beats_body = html.find("Beats Studio Pro Headphones", body_idx)
idx_card_body = html.find("Debit Card", body_idx)
idx_chaucer_body = html.find("Chaucer", body_idx)

print(f"Body start: {body_idx}")
print(f"Beats in body: {idx_beats_body}")
print(f"Debit Card in body: {idx_card_body}")
print(f"Chaucer in body: {idx_chaucer_body}")

if idx_beats_body != -1:
    print("\n--- Around Beats in Body ---")
    print(html[idx_beats_body-200:idx_beats_body+600])

if idx_card_body != -1:
    print("\n--- Around Debit Card in Body ---")
    print(html[idx_card_body-200:idx_card_body+600])
