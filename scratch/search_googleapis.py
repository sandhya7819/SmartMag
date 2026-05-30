import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\9fcd015d-8b45-4014-b4ae-9a065ed7544d\.system_generated\steps\450\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

matches = re.findall(r'href="[^"]*googleapis[^"]*"', html)
for m in matches:
    print(m)
