import re
import json

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\530e6607-1b75-4556-8c7c-88d5878350df\.system_generated\steps\386\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Find all headings
h5s = re.findall(r'<h5 class="heading">(.*?)</h5>', html)
h3s = re.findall(r'<h3 class="heading">(.*?)</h3>', html)
h2s = re.findall(r'<h2 class="heading">(.*?)</h2>', html)
widget_titles = re.findall(r'<div class="widget-title[^>]*>(.*?)</div>', html, re.DOTALL)

print("H5 Headings:")
for h in h5s:
    print(f"- {re.sub('<[^<]+?>', '', h).strip()}")

print("\nH3 Headings:")
for h in h3s:
    print(f"- {re.sub('<[^<]+?>', '', h).strip()}")

print("\nH2 Headings:")
for h in h2s:
    print(f"- {re.sub('<[^<]+?>', '', h).strip()}")

print("\nWidget Titles:")
for w in widget_titles:
    print(f"- {re.sub('<[^<]+?>', '', w).strip()}")
