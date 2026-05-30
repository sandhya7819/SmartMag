import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\9fcd015d-8b45-4014-b4ae-9a065ed7544d\.system_generated\steps\345\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

output = []

# Search for variables
matches = re.findall(r'(--c-[a-zA-Z0-9_-]+:\s*[^;}\n]+)', html)
output.append("CSS variables matching --c-:")
for m in set(matches):
    if "color" in m or "main" in m or "bg" in m or "contrast" in m:
        output.append(f"  {m}")

# Search style blocks
style_blocks = re.findall(r'<style[^>]*>(.*?)</style>', html, re.DOTALL)
output.append(f"\nFound {len(style_blocks)} style blocks.")
for i, block in enumerate(style_blocks):
    if "c-main" in block or "smartmag" in block:
        output.append(f"\nStyle block {i+1} snippet:")
        lines = [line.strip() for line in block.split("\n") if line.strip()]
        for line in lines[:60]:
            if "c-main" in line or "main-color" in line or "color:" in line or "background-color:" in line:
                output.append(f"  {line}")

with open(r"c:\Users\SK-0010\WEBSITE-TEMPLATES\scratch\check_keys_output.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(output))

print("Keys output written successfully!")
