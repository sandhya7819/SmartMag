import re

path = r"C:\Users\SK-0010\.gemini\antigravity-ide\brain\530e6607-1b75-4556-8c7c-88d5878350df\.system_generated\steps\386\content.md"

with open(path, "r", encoding="utf-8") as f:
    html = f.read()

pos_lifestyle = html.find("elementor-element-3dfed2bd")
pos_picks = html.find("elementor-element-4d2ffaec")

lifestyle_html = html[pos_lifestyle:pos_picks]

# Find any widgets or blocks inside this section
widgets = re.findall(r'<div\s+id="([^"]+)"\s+class="widget\s+([^"]+)"[^>]*>(.*?)</div>\s*</div>', lifestyle_html, re.DOTALL)
print(f"Widgets in Lifestyle section: {len(widgets)}")
for wid, wcls, wcontent in widgets:
    title_m = re.search(r'<div class="widget-title[^>]*>.*?<h5[^>]*>(.*?)</h5>', wcontent, re.DOTALL)
    title = re.sub('<[^<]+?>', '', title_m.group(1)).strip() if title_m else "NO TITLE"
    print(f"- Widget: {wid} | Title: {title}")
    # Print articles inside this widget
    arts = re.findall(r'<article\s+class="([^"]+)"[^>]*>(.*?)</article>', wcontent, re.DOTALL)
    print(f"  Articles ({len(arts)}):")
    for cls, content in arts:
        t_m = re.search(r'title="([^"]+)"', content)
        if not t_m:
            t_m = re.search(r'<a href="[^"]+">([^<]+)</a>', content)
        t = re.sub('<[^<]+?>', '', t_m.group(1)).strip() if t_m else "UNKNOWN"
        print(f"    * {t}")
