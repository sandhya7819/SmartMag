import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\ce4a9638-c04f-43b7-8e28-5af26863bf43\.system_generated\steps\400\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

# Let's search for "class=" or "data-" attributes containing sticky in the main body
# Avoid <style> tag matching
body_start = html.find("<body")
body_content = html[body_start:]

# Find all occurrences of class or data attribute containing sticky
matches = re.findall(r'(class="[^"]*sticky[^"]*"|data-sticky="[^"]*"|data-sticky-type="[^"]*")', body_content)
print(f"Found {len(matches)} occurrences in body:")
for m in set(matches):
    print("  -", m)
