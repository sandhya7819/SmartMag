import re

file_path = r"c:\Users\SK-0010\WEBSITE-TEMPLATES\scratch\rtl_content.md"
output_path = r"c:\Users\SK-0010\WEBSITE-TEMPLATES\scratch\parsed_details.txt"

with open(file_path, "r", encoding="utf-8") as f:
    html_content = f.read()

output = []

# Let's find "العرب والعالم" block
arab_block_match = re.search(r'العرب والعالم(.*?)الأكثر قراءة', html_content, re.DOTALL)
if arab_block_match:
    output.append("=== ARAB & WORLD SECTION POSTS ===")
    posts = re.findall(r'<article[^>]*>(.*?)</article>', arab_block_match.group(1), re.DOTALL)
    for idx, post in enumerate(posts):
        title = re.search(r'class="[^"]*post-title[^"]*".*?<a[^>]*>(.*?)</a>', post, re.DOTALL)
        cat = re.search(r'class="[^"]*(?:category|post-cat)[^"]*".*?>(.*?)</a>', post, re.DOTALL)
        img = re.search(r'data-bgsrc="([^"]+)"|src="([^"]+)"', post)
        
        t_text = re.sub(r'<[^>]+>', '', title.group(1)).strip() if title else "No Title"
        c_text = re.sub(r'<[^>]+>', '', cat.group(1)).strip() if cat else "No Cat"
        i_url = ""
        if img:
            i_url = img.group(1) if img.group(1) else img.group(2)
        output.append(f"{idx+1}. [{c_text}] {t_text} | Img: {i_url}")

# Let's find "إختيار المحرر" block
editor_block_match = re.search(r'إختيار المحرر(.*?)استكشاف', html_content, re.DOTALL)
if editor_block_match:
    output.append("\n=== EDITOR CHOICES SECTION POSTS ===")
    posts = re.findall(r'<article[^>]*>(.*?)</article>', editor_block_match.group(1), re.DOTALL)
    for idx, post in enumerate(posts):
        title = re.search(r'class="[^"]*post-title[^"]*".*?<a[^>]*>(.*?)</a>', post, re.DOTALL)
        cat = re.search(r'class="[^"]*(?:category|post-cat)[^"]*".*?>(.*?)</a>', post, re.DOTALL)
        img = re.search(r'data-bgsrc="([^"]+)"|src="([^"]+)"', post)
        
        t_text = re.sub(r'<[^>]+>', '', title.group(1)).strip() if title else "No Title"
        c_text = re.sub(r'<[^>]+>', '', cat.group(1)).strip() if cat else "No Cat"
        i_url = ""
        if img:
            i_url = img.group(1) if img.group(1) else img.group(2)
        output.append(f"{idx+1}. [{c_text}] {t_text} | Img: {i_url}")

with open(output_path, "w", encoding="utf-8") as out_f:
    out_f.write("\n".join(output))

print("Parsing complete. Saved to scratch/parsed_details.txt")
