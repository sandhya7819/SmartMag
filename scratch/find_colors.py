import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\9fcd015d-8b45-4014-b4ae-9a065ed7544d\.system_generated\steps\345\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Let's search for theme colors, hex codes, or elementor styles.
# Look for custom hex values starting with #
hex_colors = re.findall(r'#[0-9a-fA-F]{6}', html)
# Count occurrences
color_counts = {}
for c in hex_colors:
    c_lower = c.lower()
    color_counts[c_lower] = color_counts.get(c_lower, 0) + 1

# Sort and print top colors
sorted_colors = sorted(color_counts.items(), key=lambda x: x[1], reverse=True)
print("Top hex colors:")
for color, count in sorted_colors[:20]:
    print(f"  {color}: {count} times")

# Let's search for Elementor kit variable "--e-global-color" or main theme classes
el_vars = re.findall(r'--e-global-color-[a-zA-Z0-9_-]+:[^;]+;', html)
print("\nElementor variables:")
for var in el_vars[:15]:
    print(f"  {var}")

# Search for accent colors on elements
accents = re.findall(r'color:\s*([^;}]+);', html)
print("\nColor values:")
accent_counts = {}
for a in accents:
    a_clean = a.strip().lower()
    if len(a_clean) < 30:
        accent_counts[a_clean] = accent_counts.get(a_clean, 0) + 1
for val, count in sorted(accent_counts.items(), key=lambda x: x[1], reverse=True)[:15]:
    print(f"  {val}: {count}")
