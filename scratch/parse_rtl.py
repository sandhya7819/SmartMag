import re

file_path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\9fcd015d-8b45-4014-b4ae-9a065ed7544d\.system_generated\steps\195\content.md"
output_path = r"c:\Users\SK-0010\WEBSITE-TEMPLATES\scratch\parsed_headings.txt"

with open(file_path, "r", encoding="utf-8") as f:
    html_content = f.read()

output = []
output.append("=== ALL HEADINGS ===")
headings = re.findall(r'<(h[1-6])(?:\s+[^>]*)?>(.*?)</\1>', html_content, re.DOTALL)
for idx, (tag, text) in enumerate(headings):
    text_clean = re.sub(r'<[^>]+>', '', text).strip()
    if text_clean:
        output.append(f"{tag}: {text_clean}")

output.append("\n=== ALL POST LINK TITLES ===")
# Find links with post-title classes or similar
post_links = re.findall(r'class="[^"]*post-title[^"]*".*?<a[^>]*>(.*?)</a>', html_content, re.DOTALL)
for idx, title in enumerate(post_links):
    title_clean = re.sub(r'<[^>]+>', '', title).strip()
    output.append(f"{idx+1}: {title_clean}")

with open(output_path, "w", encoding="utf-8") as out_f:
    out_f.write("\n".join(output))

print("Parsing complete. Saved to scratch/parsed_headings.txt")
