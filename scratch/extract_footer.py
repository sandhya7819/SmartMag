import os
import re

html_path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\82f72c81-11af-4de5-9072-11d5d5502fdc\.system_generated\steps\101\content.md"
out_path = r"C:\Users\SK-0010\WEBSITE-TEMPLATES\scratch\footer_html.txt"

content = ""
for encoding in ["utf-8", "utf-16", "utf-16-le", "utf-16-be", "latin-1"]:
    try:
        with open(html_path, "r", encoding=encoding) as f:
            content = f.read()
            if "html" in content.lower():
                break
    except Exception as e:
        continue

footer_match = re.search(r"<footer.*</footer>", content, re.DOTALL | re.IGNORECASE)

if footer_match:
    footer_html = footer_match.group(0)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(footer_html)
    print("Found and wrote footer HTML to scratch/footer_html.txt")
else:
    # Try simple split
    if "<footer" in content:
        footer_html = "<footer" + content.split("<footer", 1)[1].split("</footer>", 1)[0] + "</footer>"
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(footer_html)
        print("Wrote footer HTML (split method) to scratch/footer_html.txt")
    else:
        print("Footer tag not found.")
