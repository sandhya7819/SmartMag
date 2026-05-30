import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\9fcd015d-8b45-4014-b4ae-9a065ed7544d\.system_generated\steps\450\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

fonts = re.findall(r'fonts\.googleapis\.com/css\?family=([^"\'&]+)', html)
fonts_alternate = re.findall(r'fonts\.googleapis\.com/css2\?family=([^"\'&]+)', html)

print(f"Fonts css?family=: {fonts}")
print(f"Fonts css2?family=: {fonts_alternate}")
