path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\530e6607-1b75-4556-8c7c-88d5878350df\.system_generated\steps\386\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Let's find positions of text strings
idx_beats = html.find("Beats Studio Pro Headphones")
idx_card = html.find("Debit Card")
idx_chaucer = html.find("Chaucer")

print(f"Beats index: {idx_beats}")
print(f"Debit Card index: {idx_card}")
print(f"Chaucer index: {idx_chaucer}")

# Let's print around them
if idx_beats != -1:
    print("\n--- Around Beats ---")
    print(html[idx_beats-200:idx_beats+500])
if idx_card != -1:
    print("\n--- Around Debit Card ---")
    print(html[idx_card-200:idx_card+500])
