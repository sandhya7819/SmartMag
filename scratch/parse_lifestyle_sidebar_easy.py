path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\530e6607-1b75-4556-8c7c-88d5878350df\.system_generated\steps\386\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

pos_lifestyle = html.find("elementor-element-3dfed2bd")
pos_picks = html.find("elementor-element-4d2ffaec")
lifestyle_html = html[pos_lifestyle:pos_picks]

# Let's find all occurrences of headings <h5 or <h4 or <h3
import re
print("Headings:")
for h in re.finditer(r'<h[1-6][^>]*>(.*?)</h[1-6]>', lifestyle_html, re.DOTALL):
    text = re.sub('<[^<]+?>', '', h.group(1)).strip()
    print(f"- {text}")

# Let's find all article titles in lifestyle_html
print("\nArticles:")
for art in re.finditer(r'<article\s+class="([^"]+)"[^>]*>(.*?)</article>', lifestyle_html, re.DOTALL):
    cls = art.group(1)
    content = art.group(2)
    t_m = re.search(r'title="([^"]+)"', content)
    if not t_m:
        t_m = re.search(r'<a href="[^"]+">([^<]+)</a>', content)
    t = re.sub('<[^<]+?>', '', t_m.group(1)).strip() if t_m else "UNKNOWN"
    print(f"- {t} | Class: {cls}")
